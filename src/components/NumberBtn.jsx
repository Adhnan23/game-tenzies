/* eslint-disable react/prop-types */
export default function NumberBtn({ value, isHeld, hold}) {
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }

  return <button onClick={hold} className="number" style={styles}>{value}</button>;
}
