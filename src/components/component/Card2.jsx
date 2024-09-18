import { CardHeaderText } from ".";

export default function Card2() {
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div className="flex p-3">
          <figure>
            <img src="/Rectangle 12 (1).png" alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Furnished Apartment</h2>
            <div className="flex">
              <img src="/Group.png" />
              <p>3.8 </p>
              <p>Mercedes Vito</p>
            </div>
            <p className="font-[300px] text-[#3E4958]">
              4 guests | 3 bedroom | 2 bathroom
            </p>
            <div className="flex gap-4 mt-3">
              <img
                className="w-[26px] h-[26px]"
                src="/Group 34 (1).png"
                alt=""
              />
              <p>Entire Home</p>
            </div>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
