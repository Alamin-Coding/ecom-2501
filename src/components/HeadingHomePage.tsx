type HeadingProps = {
    heading?: string;
    subHeading?: string;
    headingAlign?: "left" | "center";
};

const HeadingHomePage: React.FC<HeadingProps> = ({
    heading,
    subHeading,
    headingAlign,
}) => {
    return (
        <div className={`${headingAlign === "left" ? "text-left" : "mx-auto"} max-w-max mb-15 space-y-2`}>
            {/* Subheading with red rectangle */}
            <div className={`flex items-center gap-2.5 justify-start`}>
                <span className="w-5 h-10 bg-button2 rounded-sm"></span>
                <h4 className=" font-poppins leading-5 text-button2 font-semibold">
                    {subHeading}
                </h4>
            </div>

            {/* Main heading */}
            <h2 className="text-[25px] lg:text-[36px] font-semibold font-inter dark:text-white text-button leading-12 tracking-wide">
                {heading}
            </h2>
        </div>
    );
};

export default HeadingHomePage;
