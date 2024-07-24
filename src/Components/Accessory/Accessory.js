import React from 'react'
import MotorCard from '../MotorCycle/MotorCard'
import bag from "../../assets/accessory/depocantasi.jpg"
import yec50 from "../../assets/accessory/yec50.jpg"
const accessory = [
    {
        id: 1,
        name: "ŞEHİR İÇİ DEPO ÇANTASI",
        description:"Şehir içinde veya kısa seyahatlerde kullanım için mükemmel olan yeni nesil orta boy depo çantası.",
        image: bag,
    },
    {
      id: 2,
      name: "YEC-50 ŞARJ CİHAZI AB BİLDİRİMİ",
      description:"Yamaha motosiklet, scooter, ATV, SMB ve/veya deniz araçlarınızın aküsünü şarj edebilen 8 adımlı şarj cihazı.",
      image: yec50,
  },
]

const Accessory = () => {
  return (
    <div className="container mx-auto min-h-screen">
    <div className="flex flex-wrap justify-center">
      {accessory.map((accessory) => (
        <MotorCard key={accessory.id} motor={accessory} />
      ))}
    </div>
  </div>
  )
}

export default Accessory