export default function Loader(props) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className={`spinner-border animate-spin inline-block w-${props.size} h-${props.size} border-4 rounded-full`}
          role="status"
        >
        </div>
        {/* <div>Loading data</div> */}
      </div>
    </>
  );
}
