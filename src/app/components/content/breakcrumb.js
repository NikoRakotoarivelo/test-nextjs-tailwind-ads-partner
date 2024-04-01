
function BreakCrumb(){
   
   return(
      <div className="flex flex-wrap bg-gray-300 overflow-hidden">
        <div className="flex w-full justify-around">
          <div className="w-1/3 mx-12 h-auto"></div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="p-2 bg-gray-300  sm:text-justify flex w-full flex-col md:flex-row">
                <a href="#" className="hover:text-gray-700 text-sm mx-2">
                  Accueil
                </a>
                <span>&gt;</span>
                <a href="#" className="hover:text-gray-700 text-sm mx-2">
                  Fenêtre
                </a>
                <span>&gt;</span>
                <a
                  href="#"
                  className="hover:text-gray-700 text-sm font-bold mx-2"
                >
                  Fenêtre PVC sur mesure
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center w-full"></div>
        </div>
      </div>
   );
}
export default BreakCrumb;