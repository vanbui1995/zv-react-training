export default function Modal(props) {
  const result = props.result ? "modal show" : "modal hide";
  const resultM = props.resultM ? "modal-main show" : "modal-main hide";
  return (
    <div>
      <div className={result} onClick={props.click}></div>
      <div className={resultM}>{props.children}</div>
    </div>
  );
}
