import React from "react";

function Page() {
  return (
    <div className="bg-[#6bc1e5] w-[100vw] h-[100vh] px-[10em] py-[4em]">
      <div className="text-white text-4xl font-bold pb-12 text-center">
        Welkom bij onze Releasenotes
      </div>

      <div className="flex flex-row gap-x-20 w-full px-4 md:px-12 overflow-x-auto items-stretch">
        {/* Box 1 */}
        <div className="text-center space-y-1 text-white flex flex-col flex-1">
          <div className="border-[#b62424] text-sm font-bold border-2 flex flex-col px-10 py-8 space-y-8 items-center justify-center text-center rounded-md text-white hover:bg-[#b62424] cursor-pointer min-w-[200px] h-full flex-1">
            <div className="flex flex-col space-y-1 justify-center items-center">
              <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
              <div>Vastgoedtabel</div>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center">
              <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
              <div>Onderhoudsketen</div>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center">
              <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
              <div>Inspectic</div>
            </div>
          </div>
          <div className="font-semibold">Vastgoed</div>
        </div>

        {/* Box 2 */}
        <div className="text-center space-y-1 text-white flex flex-col flex-1">
          <div className="border-[#90cf4f] font-bold text-sm border-2 flex flex-col px-10 py-8 items-center justify-center text-center rounded-md text-white hover:bg-[#90cf4f] cursor-pointer min-w-[200px] h-full flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1 justify-center items-center">
                <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
                <div>IRIS CRM</div>
              </div>

              <div className="flex flex-col space-y-1 justify-center items-center">
                <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
                <div>IRIS Field</div>
              </div>

              <div className="flex flex-col space-y-1 justify-center items-center">
                <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
                <div>IRIS Beheer</div>
              </div>

              <div className="flex flex-col space-y-1 justify-center items-center">
                <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
                <div>IRIS Procurement</div>
              </div>

              <div className="flex flex-col space-y-1 justify-center items-center">
                <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
                <div>IRIS Incasso</div>
              </div>

              <div className="flex flex-col space-y-1 justify-center items-center">
                <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
                <div>Business Central</div>
              </div>

              <div className="flex flex-col space-y-1 justify-center items-center">
                <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
                <div>IRIS Contact Center</div>
              </div>

              <div className="flex flex-col space-y-1 justify-center items-center">
                <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
                <div>IRIS CMS</div>
              </div>
            </div>
          </div>
          <div className="font-semibold">Klant</div>
        </div>

        {/* Box 3 */}
        <div className="text-center space-y-1 text-white flex flex-col flex-1">
          <div className="border-[#0aaae8] font-bold text-sm border-2 flex flex-col px-10 py-8 space-y-8 items-center justify-center text-center rounded-md text-white hover:bg-[#0aaae8] cursor-pointer min-w-[200px] h-full flex-1">
            <div className="flex flex-col space-y-1 justify-center items-center">
              <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
              <div>GRIP</div>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center">
              <img src={"../IRIS CRM.svg"} className="w-[3rem]" />
              <div>Woonmatch</div>
            </div>
          </div>
          <div className="font-semibold">Contract</div>
        </div>
      </div>
    </div>
  );
}

export default Page;
