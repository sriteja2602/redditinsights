import './Loader.css'

export default function Loader(props) {
  return (
    <>
      <div className="flex justify-center items-center py-6">
        <span
          className="lds-hourglass"
        >
        </span>
        {/* <div>Loading data</div> */}
      </div>
    </>
  );
}
