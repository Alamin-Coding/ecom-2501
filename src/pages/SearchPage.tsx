import React, { useState } from "react";
import { Home } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router";

const AppleProductSearch: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [itemsToShow, setItemsToShow] = useState<number>(20);

	// Get All Search Data from Redux Store
	const { items: searchData, keyWord } = useSelector(
		(state: RootState) => state.searchItem.searchProduct
	);

	const allTags = searchData.map((item) => item.tags).flat();
	const tags = Array.from(new Set(allTags));
	// const findTags = tags.filter((t) => {
	// 	return t.toLowerCase() === "apple".toLowerCase();
	// });

	// console.log(allTags);
	// console.log(tags);
	console.log(keyWord);

	const handleCategoryClick = (category: string): void => {
		setSelectedCategory(category);
	};

	const handleItemsChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	): void => {
		setItemsToShow(Number(event.target.value));
	};

	return (
		<div className="min-h-screen">
			{/* Navigation */}
			<div className=" border-b">
				<div className="max-w-7xl mx-auto px-4 py-3">
					<div className="flex items-center cursor-pointer gap-2 text-sm text-gray-600">
						<Link to={"/"}>
							{" "}
							<Home size={16} />{" "}
						</Link>
						<span>/</span>
						<span>Search</span>
					</div>
				</div>
			</div>

			{/* Category Pills */}
			<div className="bg-slate-300 dark:bg-slate-800 border-b">
				<div className="max-w-7xl mx-auto px-4 py-4">
					<div className="flex flex-wrap gap-2">
						{tags.map((category) => (
							<button
								key={category}
								onClick={() => handleCategoryClick(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
									selectedCategory === category
										? "bg-blue-600 text-white"
										: "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-6">
				{/* Header */}
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-2xl font-semibold text-gray-900">
						Search - {keyWord.charAt(0).toUpperCase() + keyWord.slice(1)}
					</h1>
					<div className="flex items-center gap-2">
						<span className="text-sm text-gray-600">Show:</span>
						<select
							value={itemsToShow}
							onChange={handleItemsChange}
							className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value={20}>20</option>
							<option value={40}>40</option>
							<option value={60}>60</option>
						</select>
					</div>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
					{searchData.map((product) => (
						<ProductCard product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AppleProductSearch;
