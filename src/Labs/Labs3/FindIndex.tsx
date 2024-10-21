function FindIndex() {
  const numberArray1 = [1, 2, 4, 5, 6];
  const stringArray1 = ['string1', 'string3'];

  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === 'string3');

  return (
    <div id="wd-find-index">
      <h4>FindIndex Function</h4>
      <p>fourIndex = {fourIndex}</p>
      <p>string3Index = {string3Index}</p>
    </div>
  );
}

export default FindIndex;