import { Link, useNavigate, useParams } from "react-router";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import {
	ArrowLeft,
	ArrowRight,
	Heart,
	RefreshCw,
	SlashIcon,
	Truck,
} from "lucide-react";
import { nanoid } from "nanoid";
import { useRef, useState } from "react";
import Button2 from "../../components/Button2";
import HeadingHomePage from "../../components/HeadingHomePage";
import {
	useGetProductByIdQuery,
	useGetProductsByCategoryQuery,
} from "../../api/productApi";
import { Spinner } from "../../components/ui/spinner";
import ProductCard from "../../components/ProductCard";
import Slider from "react-slick";
import SvgIcon from "../../components/SvgIcon";
import type { Product, ProductCart } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {
	addTocart,
	decrementQuantity,
	incrementQuantity,
	removecart,
} from "../../features/cart/cartSlice";
import {
	removeWishlist,
	addToWishList,
} from "../../features/wishlist/wishlistSlice";
import { selectedCategory } from "../../features/category/categorySlice";

type Size = {
	id: string;
	size: string;
};

const ProductDetails: React.FC = () => {
	const sliderRef = useRef<Slider>(null);
	const { id } = useParams();
	const [imageIndex, setImageIndex] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// console.log(id);

	const { data, isLoading } = useGetProductByIdQuery(id!);
	const { data: categoriesData } = useGetProductsByCategoryQuery(
		data?.category || ""
	);
	const size: Size[] = [
		{
			id: nanoid(),
			size: "XS",
		},
		{
			id: nanoid(),
			size: "S",
		},
		{
			id: nanoid(),
			size: "M",
		},
		{
			id: nanoid(),
			size: "L",
		},
		{
			id: nanoid(),
			size: "XL",
		},
	];

	if (isLoading) {
		return (
			<div className="flex items-center mx-auto text-gray-400 text-center justify-center gap-4 text-3xl max-w-[300px]">
				<Spinner className="size-8" /> Loading....
			</div>
		);
	}

	const handleImageClick = (index: number) => {
		setImageIndex(index);
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

	const handleCategory = (category: string) => {
		navigate("/shop");
		dispatch(selectedCategory(category));
	};

	return (
		<section>
			<div className="container mt-20 ">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className="text-[14px] ">
							<BreadcrumbLink>
								<Link to={"/"}>Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<SlashIcon />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbLink>
								{/* <Link to={`/${data?.category}`}>{data?.category}</Link> */}
								<button
									onClick={() => handleCategory(data ? data.category : "")}
								>
									{data?.category}
								</button>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<SlashIcon />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbLink>
								<span>{data?.title}</span>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				{/* Grid Layout */}
				<div className="mt-20 grid grid-cols-[1fr_auto] items-center gap-17.5 mb-[140px]">
					{/* Left Side images*/}
					<div className="max-w-[700] gap-7.5 grid grid-cols-[170px_1fr]">
						<div className="w-[170px] grid gap-y-4 grid-cols-1 ">
							{data?.images.map((img, index) => (
								<div
									onClick={() => handleImageClick(index)}
									key={index}
									className="size-[100px] xl:size-[170px] bg-secondary flex items-center justify-center rounded-sm py-3 px-6"
								>
									<img src={img} alt="image" />
								</div>
							))}
						</div>

						<div className="max-w-[500px] h-[550px] py-[142px] flex items-center justify-center bg-secondary rounded-sm px-[27px]">
							<img src={data?.images[imageIndex]} alt="image" />
						</div>
					</div>

					{/* Right Side text */}
					<div className="max-w-[400px]">
						<div className="space-y-4 border-b ">
							<h2 className="text-2xl font-semibold font-inter">
								{data?.title}
							</h2>
							{[1, 2, 3, 4].map((_, i) => (
								<span className="text-yellow-400" key={i}>
									★
								</span>
							))}
							<p className="mt-3">${data?.price.toFixed(2)}</p>
							<p className="mb-3 ">{data?.description}</p>
						</div>

						<p className="mt-7 flex items-center mb-6 gap-3">
							Colours:
							<div className="h-5 w-5 rounded-full bg-hoverButton"></div>
							<div className="h-5 w-5 rounded-full bg-hoverButton2"></div>
						</p>

						<p className="flex mb-6 items-center gap-6">
							Size :
							<div className="flex items-center justify-center gap-4">
								{data?.size &&
									size.map((i) => (
										<div className="rounded-sm h-8 w-8 flex items-center border border-black hover:bg-button2 hover:text-white transition-all duration-300 cursor-pointer justify-center">
											{i.size}
										</div>
									))}
							</div>
						</p>

						<ProductActions data={data} id={Number(id)} />
					</div>
				</div>

				<div>
					{isLoading && (
						<div className="flex items-center mx-auto text-gray-400 text-center justify-center gap-4 text-3xl max-w-[300px]">
							<Spinner className="size-8" /> Loading....
						</div>
					)}
				</div>

				<div className=" flex items-center justify-between ">
					<div>
						<HeadingHomePage subHeading="Related Items" headingAlign="left" />
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
					{categoriesData?.products?.map((category) => {
						return (
							<div key={category.id} className="px-3">
								<ProductCard product={category} />
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
};

export default ProductDetails;

const ProductActions = ({
	data,
	id,
}: {
	data: Product;
	id: number;
	isExist?: ProductCart;
}) => {
	const [quantity, setQuantity] = useState(1);
	const { cart: cartItems } = useSelector((state: RootState) => state.cart);

	const selectedProduct = cartItems.find((item) => item.id === id);

	const { cart } = useSelector((state: RootState) => state.cart);
	const { wishList } = useSelector((state: RootState) => state.wishlist);
	const isExistCart = cart?.find((item) => item.id === Number(id));
	const isExist2 = wishList.find((item) => item.id === data.id);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddToWishlist = (product: ProductCart) => {
		if (isExistCart) {
			dispatch(removecart(product.id));
			dispatch(
				addToWishList({
					...product,
					quantity: 1,
					subtotal: product.price,
				} as ProductCart)
			);
		} else {
			dispatch(
				addToWishList({
					...product,
					quantity: 1,
					subtotal: product.price,
				} as ProductCart)
			);
		}
	};

	const user = {
		id: 1,
		name: "John Doe",
		password: "password123",
		email: "admin@example.com",
	};

	const handleCartAdd = (product: ProductCart) => {
		if (!user) {
			alert("Please login to add items to wishlist");
			navigate("/login");
			return;
		} else {
			if (!isExistCart) {
				dispatch(addTocart({ ...product, quantity, subtotal: product.price }));
				dispatch(removeWishlist(product.id));
			}
		}
	};

	const increment = () => {
		setQuantity((prev) => prev + 1);
	};
	const decrement = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	console.log(selectedProduct);

	return (
		<div className="w-full max-w-sm mx-auto space-y-4">
			{/* Quantity and Buy Now */}
			<div className="flex items-center gap-2">
				{isExistCart ? (
					<div className="flex border rounded-md overflow-hidden">
						<button className="px-3 py-2 text-lg font-semibold  text-black cursor-pointer hover:text-white hover:bg-button2">
							-
						</button>
						<div className="px-4 py-2 border-x text-lg font-medium">
							{selectedProduct?.quantity}
						</div>
						<button className="px-3 py-2 text-lg font-semibold  text-black cursor-pointer hover:text-white hover:bg-button2">
							+
						</button>
					</div>
				) : (
					<div className="flex border rounded-md overflow-hidden">
						<button
							onClick={decrement}
							className="px-3 py-2 text-lg font-semibold  text-black cursor-pointer hover:text-white hover:bg-button2"
						>
							-
						</button>
						<div className="px-4 py-2 border-x text-lg font-medium">
							{quantity}
						</div>
						<button
							onClick={increment}
							className="px-3 py-2 text-lg font-semibold  text-black cursor-pointer hover:text-white hover:bg-button2"
						>
							+
						</button>
					</div>
				)}

				{/* --------------- */}

				<button
					className={`bg-button2 hover:bg-hoverButton transition-all duration-300 cursor-pointer text-white font-medium font-poppins px-12 py-4 rounded-sm whitespace-nowrap`}
					onClick={() => handleCartAdd(data)}
				>
					{isExistCart ? "Already Added" : "Buy Now"}
				</button>

				<button
					onClick={() =>
						handleAddToWishlist({ ...data, quantity: 1, subtotal: data.price })
					}
					className={`${
						isExist2 ? "bg-red-100" : "bg-white"
					} p-2 rounded-full shadow hover:bg-gray-100 transition`}
				>
					{!isExist2 ? (
						<Heart className="w-5 h-5 text-gray-600" />
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
						>
							<path
								className="fill-red-600"
								d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
							></path>
						</svg>
					)}
				</button>
			</div>

			{/* Delivery Info */}
			<div className="border border-black rounded-sm mt-10 divide-y divide-black">
				{/* Free Delivery */}
				<div className="flex items-start gap-3 p-3">
					<Truck className="w-6 h-6 text-gray-700" />
					<div>
						<a href="#" className="font-semibold text-sm  hover:underline">
							Free Delivery
						</a>
						<p className="text-sm text-gray-600 hover:underline">
							Enter your postal code for Delivery Availability
						</p>
					</div>
				</div>

				{/* Return Delivery */}
				<div className="flex items-start gap-3 p-3">
					<RefreshCw className="w-6 h-6 text-gray-700" />
					<div>
						<p className="font-semibold text-sm text-gray-800">
							Return Delivery
						</p>
						<p className="text-sm text-gray-600">
							Free 30 Days Delivery Returns.{" "}
							<a href="#" className="underline font-medium">
								Details
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
