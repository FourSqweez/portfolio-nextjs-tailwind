import React from 'react'
import Image from 'next/image'

const About = () => {
	return (
		<div
			id="about"
			className="w-full md:h-screen px-10 items-center lg:py-40"
		>
			<div className="max-w-5xl m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						ผมเป็นคนนึงที่จบปีที่โควิดมาพอดี!!
					</p>
					<p className="py-2 text-gray-600 indent-10">
						สวัสดีครับ ชื่อนายจีรศักดิ์ เครือเนียม
						จบจากมหาวิทยาลัยขอนแก่นได้สองปีแล้วครับ ตอนจบมาใหม่ ๆ
						ได้สมัครงานไปสองที่ และสัมภาษณ์ไม่ผ่าน จากนั้นแม่ก็ผ่าตัดตา
						เลยอยู่เป็นเพื่อนแม่มาสักพัก รอให้เลือกทหารเสร็จ ค่อยสมัครงาน
						แต่พอถึงวันเลือกทหาร
						เขาดันไม่ให้สละสิทธิ์ผ่อนผันหน้างานเหมือนทุก ๆ ปี เพราะโควิด
						ก็เลยต้องผ่อนผันไปอีกปี ระหว่างนั้นก็ฝึกเขียนโค้ดมาตลอด
						แต่เปลี่ยนสายจาก Android (kotlin) มาเป็นฝึกเขียน JS
						ฝึกมาได้สักสามเดือนก็รู้สึกว่าพอไม่ได้เงินแล้วไม่ค่อยอยากทำต่อ
						ก็เลยเข้าไปในโลกของ Gamefi ได้เกือบปี และเพิ่งจะลาออก
						มาทบทวนการเขียนโค้ดใหม่เพื่อหาสมัครงานจริงจังครับ
					</p>
					<p className="py-2 text-gray-600 indent-10">
						พอกลับมาฝึกแบบจริงจังและเน้นอ่านจาก Document และทำตาม Workshop
						ของ Official เว็บไซต์ ก็รู้สึกสนุก และอยากจะพัฒนาไปมากกว่านี้
						ที่สำคัญที่สุดคืออยากเห็นการทำงาน อยากเห็นโค้ดของคนอื่น
						อยากมีเพื่อนคุยเรื่องพวกนี้ เลยอยากขอความกรุณาด้วยครับ 🙂
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 p-4 mb-20 xs:mb-0 ease-in duration-300">
					<Image
						className="rounded-xl"
						src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
						alt="test"
						width={550}
						height={800}
					/>
				</div>
			</div>
		</div>
	)
}

export default About
