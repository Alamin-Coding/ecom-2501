import { useState } from "react";
import { useGetCategoriesQuery } from "../api/categoriesApi";
import { useGetProductsQuery } from "../api/productApi";
import { CommonBreadcrumb } from "../components/CommonBreadcrumb";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { selectedCategory } from "../features/category/categorySlice";

const Shop: React.FC = () => {
	const [limit, setLimit] = useState(12);
	const [skip, setSkip] = useState(0);
	const minLimit = limit < 1 ? 1 : limit;
	const { value } = useSelector((state: RootState) => state.category);
	const { isLoading, isFetching, data } = useGetProductsQuery({
		limit: minLimit,
		skip,
		category: value,
	});
	const { data: categoryData } = useGetCategoriesQuery();

	const dispatch = useDispatch();

	const handlePrevSkip = () => {
		if (skip >= limit) setSkip(skip - limit);
	};

	const handleNextSkip = () => {
		setSkip(skip + limit);
	};

	return (
		<section>
			<div className="container min-h-screen">
				<CommonBreadcrumb className="mt-10 sm:mt-15 md:mt-20 mb-8 sm:mb-10 md:mb-12.5" />

				<div className="grid gap-4 sm:gap-8 md:gap-20 justify-between grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
					{/* Sidebar - Hidden on mobile, visible on md+ */}
					<div className="hidden md:block">
						<ul className="font-poppins space-y-4  top-20 max-h-[500px] overflow-y-scroll ">
							<p className="font-bold text-lg sm:text-xl">Shop by Category</p>
							{categoryData?.map((item) => (
								<li
									onClick={() => dispatch(selectedCategory(item.slug))}
									className={`cursor-pointer text-sm sm:text-base transition ${
										item.slug === value ? "text-button2 font-semibold" : "hover:text-button2"
									}`}
									key={item.slug}
								>
									{item.name}
								</li>
							))}
						</ul>

						<ul className="font-poppins space-y-3 mt-8 sm:mt-10">
							<p className="font-bold text-lg sm:text-xl">Shop by Color</p>
							<li className="flex items-center gap-2.5 cursor-pointer hover:opacity-75 transition">
								<div className="w-[11px] h-[11px] rounded-full bg-black"></div>
								<span className="text-sm">Color 1</span>
							</li>
							<li className="flex items-center gap-2.5 cursor-pointer hover:opacity-75 transition">
								<div className="w-[11px] h-[11px] rounded-full bg-red-500"></div>
								<span className="text-sm">Color 2</span>
							</li>
							<li className="flex items-center gap-2.5 cursor-pointer hover:opacity-75 transition">
								<div className="w-[11px] h-[11px] rounded-full bg-green-500"></div>
								<span className="text-sm">Color 3</span>
							</li>
						</ul>
					</div>

					{/* Main Content */}
					<div>
						{/* Controls */}
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-7.5">
							{/* Mobile Category Filter */}
							<div className="md:hidden">
								<select
									value={value}
									onChange={(e) => dispatch(selectedCategory(e.target.value))}
									className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm"
								>
									{categoryData?.map((item) => (
										<option key={item.slug} value={item.slug}>
											{item.name}
										</option>
									))}
								</select>
							</div>

							<div className="flex flex-col xs:flex-row xs:items-center gap-2 sm:gap-2.5 ml-auto">
								<label className="text-sm sm:text-base whitespace-nowrap">Show:</label>
								<input
									type="number"
									min="1"
									className="border border-gray-500 px-3 py-2 text-center w-20 sm:w-24 rounded-sm text-sm"
									value={limit}
									onChange={(e) => setLimit(Number(e.target.value))}
								/>
							</div>
						</div>

						{isLoading && <Loading />}

						{/* Products Grid */}
						<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-7.5">
							{data?.products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>

						{/* Pagination */}
						<div className="flex gap-2 sm:gap-5 justify-center mt-8 sm:mt-10 flex-wrap">
							<button
								className="px-4 sm:px-5 py-2 sm:py-3 border rounded-2xl border-button2 cursor-pointer text-sm sm:text-base hover:bg-button2 hover:text-white transition"
								onClick={handlePrevSkip}
								disabled={isFetching}
							>
								{isFetching ? "Fetching" : "Prev"}
							</button>
							<button
								className="px-4 sm:px-5 py-2 sm:py-3 border rounded-2xl border-button2 cursor-pointer text-sm sm:text-base hover:bg-button2 hover:text-white transition"
								onClick={handleNextSkip}
								disabled={isFetching}
							>
								{isFetching ? "Fetching" : "Next"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
