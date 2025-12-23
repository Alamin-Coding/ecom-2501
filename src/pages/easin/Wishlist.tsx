import { Icon } from "@iconify/react";
import { useGetProductsQuery } from "../../api/productApi";
import Button1 from "../../components/Button1";
import HeadingHomePage from "../../components/HeadingHomePage";
import type { Product } from "../../types/index";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { removeWishlist } from "../../features/wishlist/wishlistSlice";
import { addTocart, moveAllToBag } from "../../features/cart/cartSlice";
import { Bounce, toast } from "react-toastify";
import Slider from "react-slick";
import type { Slider as SliderType } from "react-slick";
import ProductCard from "../../components/ProductCard";
import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { selectedCategory } from "../../features/category/categorySlice";

const Wishlist: React.FC = () => {
	const sliderRef = useRef<SliderType>(null);
	const { wishList } = useSelector((state: RootState) => state.wishlist);
	// const catergoryList = wishList.map(item => item.category);
	const catergoryList = Array.from(
		new Set(wishList.map((item) => item.category))
	);

	const dispatch = useDispatch();
	const handleAddToAllCart = () => {
		dispatch(moveAllToBag(wishList));
		wishList.map((list) => dispatch(removeWishlist(list.id)));
	};

	const handleClickPrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};
	const handleClickNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
	};

	const { data: allProducts } = useGetProductsQuery({
		limit: 100, // Adjust limit as needed to fetch enough products
		skip: 0,
	});

	const categoriesData: Product[] = [];
	catergoryList.forEach((category) => {
		const categoryProducts =
			allProducts?.products.filter(
				(p) => p.category === category && !wishList.some((w) => w.id === p.id)
			) || [];
		categoriesData.push(...categoryProducts.slice(0, 3));
	});

	const navigate = useNavigate();
	const handleShop = () => {
		navigate("/shop");
		dispatch(selectedCategory(""));
	};

	return (
		<section>
			<div className="container">
				<div>
					<div className="flex items-center justify-between mb-15 mt-20">
						<h2 className="text-xl font-poppins ">
							Wishlist
							<span className="ml-2">({wishList.length})</span>
						</h2>
						<Button1 onClick={handleAddToAllCart} title="Move All To Bag">
							Move All To Bag
						</Button1>
					</div>
					<div>
						<div></div>
						<div className="grid grid-cols-4 gap-x-7.5 gap-y-15">
							{wishList?.map((product) => {
								return (
									<ProductWishlist
										children={
											<Icon icon="bytesize:trash" width="32" height="32" />
										}
										key={product.id}
										product={product}
										deleteItem={true}
									/>
								);
							})}
						</div>
					</div>
				</div>

				<div></div>

				<div className=" flex items-center justify-between mt-20 ">
					<div>
						<HeadingHomePage headingAlign="left" subHeading="Just For You" />
					</div>

					{/* Right Buttons */}
					<div className="flex justify-end pb-6 items-center gap-2">
						<div
							onClick={handleClickPrev}
							className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5"
						>
							<ArrowLeft />
						</div>
						<div
							onClick={handleClickNext}
							className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5"
						>
							<ArrowRight />
						</div>
					</div>
				</div>

				<Slider {...settings} ref={sliderRef}>
					{categoriesData?.map((category) => {
						return (
							<div key={category.id} className="px-3">
								<ProductCard product={category} />
							</div>
						);
					})}
				</Slider>

				<div className="flex justify-center">
					<button
						onClick={handleShop}
						className="flex items-start justify-center mt-20 border border-slate-500"
					>
						See All
					</button>
				</div>
			</div>
		</section>
	);
};

export default Wishlist;

interface ProductCardProps {
	product: Product;
	children: React.ReactNode;
	deleteItem?: boolean;
}

const ProductWishlist = ({
	product,
	children,
	deleteItem = false,
}: ProductCardProps) => {
	const { cart } = useSelector((state: RootState) => state.cart);
	const isExistCart = cart.find((item) => item.id === product.id);

	const notify = () =>
		toast.success("❤ Successfuly add to wishlist", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});

	const handleAddToCart = (product: Product) => {
		if (!isExistCart) {
			dispatch(removeWishlist(product.id));
			notify();
			dispatch(addTocart({ ...product, quantity: 1, subtotal: product.price }));
		}
	};

	const dispatch = useDispatch();
	return (
		<div className="max-w-[270px] font-poppins">
			<div className="group relative  bg-secondary dark:bg-slate-400  cursor-pointer rounded-sm h-[250px] mb-4   overflow-hidden flex items-center justify-center py-9 px-10">
				{/* Image */}
				{/* Wishlist and view icon */}
				<div className="absolute top-3 right-3 flex flex-col gap-2">
					<button
						{...(deleteItem
							? { onClick: () => dispatch(removeWishlist(product.id)) }
							: null)}
						className="bg-white p-2 w-8.5 h-8.5 flex items-center justify-center  rounded-full shadow hover:bg-gray-100 transition"
					>
						{children}
					</button>
				</div>

				{/* Discount */}
				<span className="absolute top-3 left-3 bg-button2 text-white text-xs font-poppins  font-semibold px-3 py-1 rounded-sm">
					-{product.discountPercentage}%
				</span>

				<img className="h-full" src={product.thumbnail} alt="image" />

				<button
					onClick={() => handleAddToCart(product)}
					className="w-full text-center absolute bg-button p-2 text-white font-poppins transition-all duration-500 cursor-pointer rounded-b-sm opacity-100  bottom-0"
				>
					Add To Cart
				</button>
			</div>

			{/* title */}
			<h2 className="font-medium mb-2">{product.title}</h2>

			{/* Price */}
			<div className="flex items-center gap-2 mb-2">
				<span className="text-button2 font-medium ">${product.price}</span>
				<span className="text-gray-400 line-through text-sm">
					${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
				</span>
			</div>

			{/* Ratings */}
			<div className="flex items-center">
				<div className="flex  text-lg">
					{Array.from({ length: Math.round(product.rating) }).map((_, i) => (
						<span className="text-yellow-400" key={i}>
							★
						</span>
					))}
					{Array.from({ length: 5 - Math.round(product.rating) }).map(
						(_, i) => (
							<span className="text-gray-400" key={i}>
								★
							</span>
						)
					)}
				</div>
				<span className="text-gray-600 text-sm ml-2">{product.rating}</span>
			</div>
		</div>
	);
};
