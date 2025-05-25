const OverViewCity = ({ countryData }: { countryData: any }) => {
    return (
      <section>
        <div className="p-6 rounded-lg border bg-teal-600/75 shadow-md ">
          <div className="flex items-center mb-4">
            <div className="flex flex-col gap-4">
              <span className="text-lg text-white font-normal ">
                {countryData.overview}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default OverViewCity;
