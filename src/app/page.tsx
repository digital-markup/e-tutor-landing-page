/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Star, Play } from "lucide-react";
import ReviewCard from "@/components/review-card";
import Header from "@/components/header";
import { MovingCards } from "@/components/moving-cards";
import { courses } from "@/shared/constants";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2B68FF]">
                Discover best classes for the best learning
              </h1>
              <p className="text-gray-600 max-w-md">
                Online learning and teaching marketplace with 5K+ courses & 10M
                students. Taught by experts to help you acquire new skills.
              </p>
              <div className="w-full flex gap-x-4">
                <div className="flex gap-x-1 items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="font-medium">4.9 (5,000+ reviews)</p>
              </div>
              <div className="flex flex-wrap gap-4">
                {/* <Button className="bg-[#437A48] hover:bg-[#437A48]/90">
                  Try AIRobot
                </Button> */}
                <Link
                  href={"#"}
                  className="border-[#437A48] border rounded-lg px-4 py-2 text-[#f97316] flex gap-x-2 items-center hover:bg-green-50"
                >
                  <Image
                    src={"https://i.ibb.co/GWdGxZN/e-tutor-logo.png"}
                    alt="play"
                    width={118}
                    height={36}
                    className="object-contain"
                  />
                  Access LMS
                </Link>
              </div>

              {/* Reviews */}
              <div className="flex gap-4 pt-12">
                <ReviewCard />
                <ReviewCard />
              </div>
            </div>
            <div className="relative lg:pl-24">
              <div className="absolute top-0 right-2 rounded-full -z-10">
                <Image
                  src={"/imges/hero-vectors.svg"}
                  alt="play"
                  width={280}
                  height={200}
                  className="object-cover"
                  priority
                />
              </div>
              <figure>
                <Image
                  src={"https://i.ibb.co/9b4dkpt/hero-image.png"}
                  alt="Student with books"
                  width={500}
                  height={600}
                  className="relative z-10"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <header className="flex flex-col mb-10">
              <h2 className="text-5xl font-bold mb-8">Courses</h2>
              <p className="max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                veritatis, voluptatem in voluptate enim odio! Earum culpa dolore
                distinctio quibusdam reprehenderit labore ullam, accusamus
                adipisci a at ad dolorum facere?
              </p>
            </header>
            <div className="w-full pt-10">
              <MovingCards items={courses} speed="slow" />
            </div>
          </div>
        </section>

        {/* Agro-bot Section */}
        <section className="py-16 bg-[#F8F9FF]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-[#2B68FF] mb-2">
              Ask Agro-bot
            </h2>
            <p className="text-gray-600 mb-8">
              AI model trained specially for your questions
            </p>
          </div>
        </section>

        {/* LMS Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-2">
              Learning Management System
            </h2>
            <p className="text-gray-600 mb-8">
              Space is limited. Reserve your spot today!
            </p>
            <section className="w-full flex justify-center items-center mt-28">
              <div className="w-full justify-center relative flex gap-2">
                <Image
                  src="https://i.ibb.co/XFsqGkp/laptop.png"
                  alt="Learning Management System on multiple devices"
                  width={536}
                  height={341}
                  className="object-contain w-[350px] h-[300px]"
                  priority
                />
                <div className="w-full">
                  <figure className="absolute left-40 -top-10 -z-10">
                    <Image
                      src="https://i.ibb.co/4KKLy7X/pc.png"
                      alt="Learning Management System on multiple devices"
                      width={536}
                      height={341}
                      className="object-contain w-[350px] h-[300px]"
                    />
                  </figure>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#437A48] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">e-tutor</h3>
              <p className="text-sm">Learning Reinvented</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
                <li>
                  <Link href="/news">News & Press</Link>
                </li>
                <li>
                  <Link href="/library">Library</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Essentials</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/agreement">User Agreement</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">Newsletter</Link>
                </li>
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>© e-tutor - Copyright 2023. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
