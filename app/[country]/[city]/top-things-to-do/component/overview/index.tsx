const OverViewCity = ({ cityData }: { cityData: any }) => {
    return (
        <section>
        <div className="mb-8 bg-gradient-to-r from-teal-50 to-slate-50 p-6 rounded-lg border border-teal-100 shadow-sm animate-fade-in-up">
          <div className="flex items-center mb-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 ">
                <div className="bg-teal-100 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-teal-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Overview
                </h2>
              </div>
              <p>{cityData.description}</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default OverViewCity;
