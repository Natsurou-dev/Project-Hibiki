export default function CardTest() {


  return (
    <div className="h-screen border-solid border-4 border-blue-500 flex justify-center items-center">
      <div className="h-full w-200 border-solid border-4 border-red-500">
        <div className="font-sans text-3xl flex justify-center items-center h-3/4 w-full border-dashed border-4 border-yellow-500">
          儀式
        </div>
        <div className="font-sans text-3xl flex justify-around items-center h-1/4 w-full border-dashed border-4 border-green-500">
          <button>Know</button>
          <button>Don't Know</button>
        </div>
      </div>
    </div>
  );
}