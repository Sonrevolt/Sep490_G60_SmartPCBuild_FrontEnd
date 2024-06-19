"use client";
import { CategoryProductItem, SearchInput } from "@/components/_personal";
import {
  ChevronRight,
  CircleUserRound,
  LayoutGrid,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CategoryProductList, NavLinkList } from "@/app/_utils/data/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import "../Header/header.css"
export default function Header() {
  const pathname = usePathname();
 
  const showHeader =
    pathname === "/admin-login" || pathname === "/create-account" ? false : true;
  return (
    <>
    <header className={`${!showHeader && "hidden"} w-full bg-[#026db5]`}>
      <div className="flex container items-center justify-between py-2 xl:py-4 gap-x-4">
        {/* Logo */}
        <Link href={"/"}>
          {<Image
            src={"/SmartPCDoAn.png"}
            width={260}
            height={96}
            alt="logo"
            className="w-[200px] h-full max-h-20 xl:w-[260px] bg-cover bg-center"
          />}

        </Link>

        {/* Category Product */}
       
       <div className="listproduct relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>

            <h2 className="hidden lg:flex gap-2 items-center border rounded-sm p-2 px-4 bg-white cursor-pointer text-sm font-semibold">
              <LayoutGrid className="h-4 w-4 " /> Danh mục sản phẩm
            </h2>
          
    
          </DropdownMenuTrigger>

        </DropdownMenu>
        
        <div style={{display:'none'}} className="homepage-slider-2019 absolute">
      <div className="homepage-slider-left">
        <ul className="ul ul_menu_2019 boxshadowx2023" id="menu-2019">
          <li
            id="vt-1106"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/laptop-tablet-mobile" className="root">
              Laptop, Macbook, Surface
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-1087"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/laptop-gaming-do-hoa" className="root">
              Laptop Gaming, Đồ Họa
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-455"
            className="js-hover-menu li-catcha-menu"
          
          >
            <a href="/phu-kien" className="root">
              Phụ Kiện Laptop, PC, Mobile
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-178"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/pc-gaming-streaming" className="root">
              PC - Chơi Game, Học Tập
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-388"
            className="js-hover-menu li-catcha-menu"
          
          >
            <a href="/pc-workstations" className="root">
              PC - Đồ Họa, Thiết Kế
            </a>
           
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-137"
            className="js-hover-menu li-catcha-menu"
            
          >
            <a href="/may-tinh-de-ban" className="root">
              PC - Văn Phòng, L�&nbsp;m Việc
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-6"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/linh-kien-may-tinh" className="root">
              Linh Kiện Máy Tính
            </a>
           
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-379"
            className="js-hover-menu li-catcha-menu"
          >
            <a href="/tan-nhiet-cooling" className="root">
              Tản Nhiệt, Fan, Đèn Led
            </a>
           
            <span className="arrow-li-catcha-menu" />
          </li>
        
          <li
            id="vt-12"
            className="js-hover-menu li-catcha-menu"
          
          >
            <a href="/thiet-bi-van-phong" className="root">
              TB Văn Phòng, Hội Nghị
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
         
        </ul>
      </div>
    
     


    </div>
    {/* <div style={{left:'210px',top:'46px'}} className="homepage-slider-2019child absolute z-50 ">
      <div className="homepage-slider-left">
        <ul className="ul ul_menu_2019 boxshadowx2023" id="menu-2019">
          <li
            id="vt-1106"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/laptop-tablet-mobile" className="root">
              Laptop, Macbook, Surface
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-1087"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/laptop-gaming-do-hoa" className="root">
              Laptop Gaming, Đồ Họa
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-455"
            className="js-hover-menu li-catcha-menu"
          
          >
            <a href="/phu-kien" className="root">
              Phụ Kiện Laptop, PC, Mobile
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-178"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/pc-gaming-streaming" className="root">
              PC - Chơi Game, Học Tập
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-388"
            className="js-hover-menu li-catcha-menu"
          
          >
            <a href="/pc-workstations" className="root">
              PC - Đồ Họa, Thiết Kế
            </a>
           
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-137"
            className="js-hover-menu li-catcha-menu"
            
          >
            <a href="/may-tinh-de-ban" className="root">
              PC - Văn Phòng, L�&nbsp;m Việc
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-6"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/linh-kien-may-tinh" className="root">
              Linh Kiện Máy Tính
            </a>
           
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-379"
            className="js-hover-menu li-catcha-menu"
          >
            <a href="/tan-nhiet-cooling" className="root">
              Tản Nhiệt, Fan, Đèn Led
            </a>
           
            <span className="arrow-li-catcha-menu" />
          </li>
        
          <li
            id="vt-12"
            className="js-hover-menu li-catcha-menu"
          
          >
            <a href="/thiet-bi-van-phong" className="root">
              TB Văn Phòng, Hội Nghị
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
         
        </ul>
      </div>
    
    </div> */}

    </div>
    
        {/* search input */}
        <div className="ml-auto hidden lg:flex ">
          <SearchInput placeholder="Hôm nay bạn muốn mua gì?" />
        </div>

        {/* account and cart */}
        <div className="flex items-center gap-x-4 ml-8">
          <Link
            className="lg:flex flex-col items-center px-3 gap-y-1 hidden"
            href={"/admin-login"}>
            <CircleUserRound color="#ffffff" size={32} />
            <span className="text-[13px] font-medium text-white w-full text-center">
              Tài khoản
            </span>
          </Link>
          <Link
            className="lg:flex flex-col items-center px-3 gap-y-1 hidden"
            href={"/cart"}>
            <ShoppingCart color="#ffffff" size={32} />
            <span className="text-[13px] font-medium text-white w-full text-center">
              Giỏ hàng
            </span>
          </Link>
          {/* Navigation mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <div className="lg:hidden">
                <AlignJustify color="#ffffff" />
              </div>
            </SheetTrigger>
            <SheetContent>
              <nav className="w-full flex items-center justify-start">
                <ul className="w-full flex flex-col items-center justify-start gap-y-2">
                  <li className="flex w-full justify-start py-1 font-semibold uppercase text-sm">
                    <Link className="" href={`/`}>
                      Trang chủ
                    </Link>
                  </li>
                  <Sheet>
                    <SheetTrigger asChild>
                      <li className="flex w-full justify-between items-center py-1 font-semibold uppercase text-sm">
                        <span>Sản phẩm</span>
                        <ChevronRight size={20} />
                      </li>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-scroll h-full">
                      <SheetHeader>
                        <SheetTitle className="uppercase">Sản phẩm</SheetTitle>
                        <SheetDescription asChild>
                          <ul className="w-full flex flex-col justify-start gap-y-2 text-black ">
                            {CategoryProductList?.map((item, index) => (
                              <li
                                className="flex flex-col w-full justify-start items-start py-1 uppercase text-sm gap-y-1"
                                key={index}>
                                <Link
                                  className="font-semibold"
                                  href={`/danh-muc-san-pham/${item?.href}`}>
                                  {item?.name}
                                </Link>

                                {item?.categoryList && (
                                  <ul className="w-full flex flex-col">
                                    {item?.categoryList?.map((category, i) => (
                                      <li
                                        className="flex flex-col w-full justify-start items-start py-1 capitalize text-[12px] gap-y-1"
                                        key={index + "" + i}>
                                        <Link
                                          href={`/${item?.href}/${category?.href}`}>
                                          {category?.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                  {NavLinkList?.map((item, index) => (
                    <li
                      key={index}
                      className="flex w-full justify-start py-1 font-semibold uppercase text-sm">
                      <Link className="" href={`/${item?.href}`}>
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                  <li className="flex w-full justify-start py-1 font-semibold uppercase text-sm">
                    <Link className="" href={`/admin-login`}>
                      Tài khoản
                    </Link>
                  </li>
                  <li className="flex w-full justify-start py-1 font-semibold uppercase text-sm">
                    <Link className="" href={`/cart`}>
                      Giỏ hàng
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  
    </>
  );
}
