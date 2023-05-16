import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product from "components/Product";
import Partner from "components/Partner";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import TestimonialCarousel from "components/TestimonialCarousel";
import styles from "@/styles/landingpage.module.css"
import { useMediaQuery } from '@chakra-ui/react';

import bcard from "../../public/images/bcard.svg";
import earn from "../../public/images/earn.svg";
import onboard from "../../public/images/onboard.svg";
import phone from "../../public/images/phone.svg";
import support from "../../public/images/support.svg";
import community from "../../public/images/community.svg";

const LandingPage = () => {
  const [ismobileScreen] = useMediaQuery("(max-width: 768px)");

  return (
		<div>
			<section className="flex flex-col md:flex-row justify-center gap-[2rem] items-center px-[3rem]">
				<div className="w-[50%] max-[767px]:w-full">
					<div className={`${styles["gradient-header"]}`}></div>
					<h1 className="text-5xl leading-[3.625rem] font-bold text-center relative z-50 max-[767px]:text-[30px] max-[767px]:leading-[150%]">
						The card made for DAOs, by BanklessDAO.
					</h1>
					<p className="text-lg leading-[1.375rem] mt-[2rem] text-center relative z-50 max-[767px]:leading-[130%]">
						Pay in fiat, earn DAO tokens. Support your DAO with every swipe.
					</p>
					<form className="flex gap-4  mt-[2rem] justify-center max-[767px]:flex-col max-[767px]:items-center max-[767px]:pb-[20px] max-[767px]:justify-center">
						<input
							type="email"
							placeholder="Email"
							className="border border-gray-400 px-4 py-2 rounded-md w-[18.25rem] text-black z-50"
						/>
						<button className="w-[11.707rem] h-[2.719rem] rounded-[0.25rem] bg-gradient-to-r from-purple-600 to-indigo-600 px-[0.438rem] z-50">
							Join our waitlist
						</button>
					</form>
				</div>
				<div className="max-[767px]:hidden">
					<Image
						priority
						src={bcard}
						className=""
						alt="bankless card"
					/>
				</div>
				<div className={`${styles["gradient-header-strip"]}`}></div>
			</section>

			<section className="mt-[13rem] flex justify-evenly items-center overflow-hidden px-[3rem] w-full max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center max-[767px]:gap-[4rem] max-[767px]:mt-[auto]">
				<div className="flex flex-col gap-[4rem]  w-[33.33%] max-[767px]:w-full max-[767px]:justify-center max-[767px]:items-center max-[767px]:text-center">
					<div className={`max-w-[24rem]`}>
						<div>
							<Image
								priority
								src={earn}
								className=" max-[767px]:m-auto"
								height={100}
								width={100}
								alt="earn"
							/>
						</div>
						<h2 className="font-semibold text-[2rem] leading-[2.421rem]">
							{" "}
							Earn DAO tokens, increase token price
						</h2>
						<p className="text-lg leading-[1.375rem]">
							Every card purchase earns you cashback in DAO tokens purchased
							from a DEX, increasing token value.
						</p>
					</div>

					<div className={`max-w-[24rem]`}>
						<div>
							<Image
								priority
								src={onboard}
								className=" max-[767px]:m-auto"
								height={100}
								width={100}
								alt="onboard"
							/>
						</div>
						<h2 className="font-semibold text-[2rem] leading-[2.421rem]">
							{" "}
							Easily onboard new DAO members
						</h2>
						<p className="text-lg leading-[1.375rem]">
							With our easy-to-use mobile app, you can onboard new friends into
							your DAO with a simple download.
						</p>
					</div>
				</div>

				<div className="-[33.33%] flex justify-center items-center max-[767px]:w-full max-[767px]:-order-1">
					{ismobileScreen ? (
						<Image
							priority
							src={phone}
							className=""
							alt="bankless card"
							height={379}
							width={339}
						/>
					) : (
						<Image
							priority
							src={phone}
							className=""
							alt="bankless card"
							height={379}
							width={250}
						/>
					)}
				</div>

				<div className="flex flex-col gap-[4rem]  w-[33.33%] items-end max-[767px]:w-full max-[767px]:justify-center max-[767px]:items-center max-[767px]:text-center">
					<div className="max-w-[24rem]">
						<div>
							<Image
								priority
								src={support}
								className=" max-[767px]:m-auto"
								height={100}
								width={100}
								alt="support"
							/>
						</div>
						<h2 className="font-semibold text-[2rem] leading-[2.421rem]">
							Support your favourite DAOs
						</h2>
						<p className="text-lg leading-[1.375rem]">
							A percentage from every card payment goes to your DAO’s treasury,
							helping to fund their mission.
						</p>
					</div>

					<div className="max-w-[24rem]">
						<div>
							<Image
								priority
								src={community}
								className="max-[767px]:m-auto"
								height={100}
								width={100}
								alt="community"
							/>
						</div>
						<h2 className="font-semibold text-[2rem] leading-[2.421rem]">
							The community-owned card!
						</h2>
						<p className="text-lg leading-[1.375rem]">
							Bankless Card is by DAOs, for DAOs. Unlike centralized crypto
							cards, you have a say in how we build the future.
						</p>
					</div>
				</div>
				<div className={`${styles["gradient-bottom-strip"]}`}></div>
			</section>
			{/* <section className="mt-[10rem] relative bg-[#171717] pt-[20px] pb-[50px]">
				<h1 className="font-medium text-[2rem] leading-[2.438rem] text-center pb-[6rem]">
					What Our Users Say
				</h1>
				<div className={`${styles["ellipse1"]}`}></div>
				<div className={`${styles["ellipse2"]}`}></div>
				<TestimonialCarousel />
			</section> */}
			<Product />
			<Partner />
			<ContactUs />
			<Footer />
		</div>
	);
};

export default LandingPage;