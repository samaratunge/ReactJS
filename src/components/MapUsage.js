function Car(Props){
    return <li>My id {Props.id} and brand {Props.brand}</li>
}

function Garage(){
    const cars = [
        {id : 1, brand : 'Ford'},
        {id : 2, brand : 'BMW'},
        {id : 3, brand : 'Audi'}
    ]

    const evens = [2, 4, 6, 8, 10];

    const values = [1, 2, 3, 4, 5, 6, 7, 8];

    return(
        <div>
            <h3>Who lives in my Garage</h3>
            <ul>{cars.map((car) => <Car id={car.id} brand={car.brand}/>)}</ul>
            <ul>{evens.map((x) => <>{x * 2} , </>)}</ul>            
            <ul>{values.map((v) => ((v % 2) === 0)?'Even, ' : 'Odd, ')}</ul>
        </div>
    )
}
export default Garage;