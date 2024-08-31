import React from 'react'

export default function Page() {
    const data =
        [
            {
                "id": 1,
                "title": "Naalaiya Theerpu",
                "year": 1992,
                "rating": 6.0,
                "runtime": 145,
                "director": "S. A. Chandrasekhar",
                "poster": "naalaiya_theerpu.jpg"
            }];
    return (
        <div className="row">
            <div className='col-sm-6 p-5'>
                <img src="https://firebasestorage.googleapis.com/v0/b/arun-netflix.appspot.com/o/images%2Fsenthoorapandi.jpg?alt=media&token=6565d4b8-ecac-4d6a-b834-9f10da12eb48" className='img-fluid' alt="" />
            </div>
            <div className="col-sm-6 p-5 text-white">
                <h1> {data[0].title}                   </h1>

                <div className="card-body">
                    <ul>
                        <li className='list-item'>year: {data[0].year}</li>
                        <li className='list-item' >Runtime: {data[0].runtime}</li>
                        <li className='list-item'>Rating: {data[0].rating}</li>
                        <li className='list-item'>Director: {data[0].director}</li>
                    </ul></div>
            </div>

        </div>

    )
}
