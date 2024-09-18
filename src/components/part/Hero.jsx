import Card from "../component/Card";
import Card2 from "../component/Card2";
import Card3 from "../component/Card3";

export default function Hero() {
  return (
    <main className="w-full bg-gray-100 p-10">
      <div className="m-auto container flex gap-10 ">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col  ">
            <p>430+ Stays</p>
            <p className="font-extrabold text-4xl text-[#3E4958]">
              Stays in Los Angeles
            </p>
          </div>
          <div className="flex gap-10 items-center">
            <button class="btn btn-outline  rounded-[30px]">
              Free cancellation
            </button>
            <button class="btn btn-outline rounded-[30px] ">Price</button>
            <button class="btn btn-outline rounded-[30px]">Instant Book</button>
            <img className="w-[20px] h-[20px]" src="/Vector.png" alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <Card />
            <Card2 />
            <Card3 />
          </div>
        </div>
        <div>
          <div class="flex justify-center mr-[100px]">
            <iframe
              class="w-[770px] h-[920px] rounded-xl shadow-xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
