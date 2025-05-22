import Container from "./Container";

export default function HelloWorld(){
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return(
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>

            <GreatingBinjai/>
            <QuoteText/>

            <UserCard 
	            nama="Indi" 
	            nim="2355"
	            tanggal={new Date().toLocaleDateString()}
	          />
            <UserCard {...propsUserCard}/>  
           
           <img src="img/spongebob.jpg" alt="logo"/> 
        </div>
    )
}

function GreatingBinjai(){
    return(
        <small>Salam Dari Binjai</small>
    )
}

function QuoteText(){
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku Ingin Jadi Macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama : {props.nama}</h3>
            <p>NIM : {props.nim}</p>
            <p>Tanggal : {props.tanggal}</p>
        </div>
    )
        
}