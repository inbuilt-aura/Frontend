/* eslint-disable react/prop-types */
function MenuOverlay  ({menuList})  {
  return (
    <div>
      <div className="absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-7">
      {menuList.map((item)=>(
      <h1 key={item.id} className='text-white text-[24px] mb-6 justify-center mt-10
           hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>{item.title}</h1>
        ))}
      </div>
    </div>
  );
}

export default MenuOverlay;