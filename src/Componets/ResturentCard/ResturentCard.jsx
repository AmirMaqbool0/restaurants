import React from 'react'
import './style.css'
import { UserPlus } from 'lucide-react'

const ResturentCard = () => {
  return (
    <div className='resturent-card-container'>
        <div className="resturent-owner-logo">
            <img src="https://s3-alpha-sig.figma.com/img/8723/e9df/d7690dd529f524340e3c68af1a884991?Expires=1703462400&Signature=Np6F53OLUQMBQmPkA6qcwMKTx3wZEx-f8Cm4AAfSD-PIrst-FtaVcpzpCzTjvuSSYBvFXYSvqmrOxEhmm~HnBCNQ1w7Bzi8N6wd5va3gp5CsvLRQ6~1BuM6leZUs5VDMM6J7aMKCySflwKWytF6pDY0RtWH3NijQcHDK6-aZC5~zAnaj4kZMcMghf9~k0J0xPCqE8Z8h71oxcrkyLMb1T~~jX-kn7R9fyKz3T2Tm-7OHxt4DJq0hBJQT0hKjG0G0dgHLEbP89IBDcopi9HzO3fMEZWU13uZsArJBeYr4LXUNr6SSAY2nioEXMBTxuXDQZrH34YIbaUKWWrdOARE4yA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
        <div className="resturent-follow-btn">
        <UserPlus color="#042C99" />
        <span>Follow Restaurant</span>
        </div>
        <div className="follower-heading">
            <span>Followers 8</span>
        </div>
        <div className="follower-logos">
            <div className="follower-logo">
                <img src="https://s3-alpha-sig.figma.com/img/8c34/c8db/075e7a56c830ab69da68db646fe34643?Expires=1703462400&Signature=Wk9nmpCrBWrrXBjCbcL6Jbi391e0R0KriXPEdsQGtBOBtXZBMdmaBmOZZ1FK772tbDET8J-0jN02nid2XPKpZwXgA-9DoGcxw6Gt4d65xnmUGAjGOCTRISSort79BwS5sL0ukvuDaFEgazeh3mvWIbnN3EVdJ4hjMq4ZD7yBlLF4LVBoWE0NPI2sqgGijZixHhZgz2CUZvNIH9teFIXaycN2xIxCaF05AGfCebQFKt~d0ellCv2dbpJ4Hw61rDbAKXtE3S6OITZcK6SkDZ3kF0qqjWvNVNV8W7s2yFPOj8IiDyUhidhZ562BYwUI07wHKzXbuXt~19rpgUKO7G9ViA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="follower-logo">
                <img src="https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1703462400&Signature=OD2iMl-Cs~PytGTbD9IQ7qRyej~9PP6rkztrbXQQRsG4A3DiMRKp9--QshWz-zkzcqrAXdEtLvpGje2Zsns9RWmaZly4yZHpveGEehMKsPXEd2A4WqueBQF3m9Ka2MadXMaDiGU8g4j35CcZwzqkE4gNVdL8~71e6svlQiAJ8k4NXBnSC0xEYQQPJZKE7NPjgSmAZnOGuw5v5~Oz~txCgP91X4h6yooDVusNEJtAlJ0V0eB0~-Nc07ZISUhRCnznNjBGEHJBIbY8ePZcIg10jycJWN5ycykFlSYdrD~jAuaM-qPRfspzlBprZewMVNjPnd2v~V1TWKnKJZkUAx0NsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="follower-logo">
                <img src="https://s3-alpha-sig.figma.com/img/a2b2/eb3e/17bbc1c05828f708a5f97d392e99d974?Expires=1703462400&Signature=lz2qrGoHRvmTFC7rmyOP0FJIzHfhlsF7tUWufsRq8~Wg64t36irDazSfAPEzNR3MIfv0khn-lyLHt6n~Z6eka8qXbFquogzi8UdJb7mfBn96vBOI1bg73~V6ZAxil1LYuBjvvYtnF2tOAOdVjXghiyDW55y1iqKyR4Sm8O3CN-hnFGuMlV45r6~no9xCDmQQ8z5UYhNXRtBRFc1fwOdTYlIwYitfCzWAOOkS-68XH~rdeT5CoterwphzaDThrjFUDZ~Iyr-ZB9Tv-Be7KX8u-ZG2FEf8JSncpHqn2HOUsadqiruQ~QIejUEse4xNcbQBMwf7YqQBUP2dy3KqG0aqfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="follower-logo">
                <img src="https://s3-alpha-sig.figma.com/img/9bbc/f2a8/f6d1f753b286332b007b2076174bf01a?Expires=1703462400&Signature=EgvFyuwhVDbCW3vqtweuwLuV9ojMEfPGBnpoGfbPj7ddTJqZYm~aOThU7A-p-87Xkm83jhcYQlqVVsdstdNIpvlXL84djS7Yt2h2Vmr-ypAP001VN0prqHzWPxkJRZ-TEjJxMe0l6ptWGDueJR5QmxKJ7fbn79cL-qeaOOrG2G2EXJzfUgJuRrIn1G32bsl7e~qT8Y4t7x5t5FTJO2jt3yAljYMXhbV5fpPfVhukAY2-hBepiJ2fSxlyKEuFMLyghdTM83eTf5gU2OTisbDrzv4DWn0oz3roCRs9P~b6hgaBBTuo42hpmt27026TkOTVfl8suzZF-Do1n4lL4WANgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="follower-logo">
                <img src="https://s3-alpha-sig.figma.com/img/1e07/8348/a54489bfd231d82fe1944770883c8d80?Expires=1703462400&Signature=YIB5GtfM9Cd4EkxtitaFPAwMf7TjmEmfqgBO1kUM~cqNToPnNqKUYHBwKbhIqFwFY3nA6wVIzjqXyz4EvBuI5FCdDnzNWjUgqAv2ijnrApY0DjWLWzY2PRjbNDDjeJpwkAwTcn~sIkVwOiLmQd5gSxiQsT4uBhPYK0KeWLBTZZdcFVOe5H5pd-dlpNwJMvQb-R6YsBvLAwGBjL94D-fN50Js~etccVLZFp~kdas4Fet6E~d-9gc1lxyG6fThfdsLVeL~boKfIgWhAbxoEFYgO1MHpAAh3DfOB0g3UsbVu7wIoXJCWEbiZaPXEyKh-VV-oqsiEflKsK19E8zV~65jbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="follower-logo">
                <img src="https://s3-alpha-sig.figma.com/img/b449/79e1/c98ecb3ec92ac86805fe55581fbeaa60?Expires=1703462400&Signature=cFCGBr8rdKmcCdQZU3ZaIIOsSBBrtvwJRUIwZIPL2NdRl24WOVM2vbSOMDumWJQOR9~~ur81-XX8Nzk8o70JDHpFb2aZzbzRkrbmR1ROYk3Tol9lGKvbPTcdpVaW2V6wRaff-3EYa6vwX5Tp7qrwAwt5hlZz06gVbznrOvXn6CSZtkDx25lxIm~kWQnqtaQK0YjgcEBMiq5uSBYwcdpf8nTxSXRadzjbNPKooiGHAapCdGqqNz9htwUi~-QNCYwwRex~CDcvk6kPX1I67bSme2SgBrpgu6SMPh-3ENip4tFjLs5mqHK-ZgTYKIHBN1ZXWEFrHHdVAu3hFuOU7Dktxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="follower-logo">
                <img src="https://s3-alpha-sig.figma.com/img/5532/95ca/2ac4b977764e4145661c97e2c6c71fb8?Expires=1703462400&Signature=G6nlPcpAaql7uQEDiMiBMeHRQmYT2gd9zTUx0CV4F-OgOv0PDghvNYrHE18Z~P6pTo0XTnRMO9ggguGLbLuQxbSvnvNgApV5flc7WZQUNH6kpNjgNSbcFKRm4rB6ql5twNBhXqmKgDlFQZISA7wb6e9WKWa3AKZP-pb~12vYejK~IsSO7wgviGtF6lOP-dKtvq1isoig~5~uvGGfS4jmWep1E7W6C2EQGQnRPDtS5g4gV4QqT-fE~U~BXh98oRCzqby4T7BJJV8u~NT0nvJdpxqXiimszWnXFTXWNIcNUoOZ9MK3EEEBUExt6SSm0HydLcoM0-03TUJ6DuNCt4dScg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="follower-logo">
                <img src="https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1703462400&Signature=W9tPVodWootY2CA~XIjBsgz0r05c5xlTBDYO1jBu5hfW1GfvdbUNwiWzhd1T90RgOIqn2CoQvLVBwUuTgdxuwpcZNQ5YWR6dHQk0Cxmk2mqCJUlLd0m43liwJV8CnbFgnsryrHY0IKH8zXKS8a7H42wkQB~yFPVV1dSrMfiVLAoNI~YBUN03j-5D~EZTLxf4b8FUJDjdzKQ4FEMtfLSAbFlkfgZ5SkglSZwaVaX6ktHELGmOg19SHEFOV1CuysfSVuIZbi4qNHPRAvt0uJKoN1c5HYES4K2tlGOcPgoMgpLQufJZo0XU31VkJG0NT5hQeAiYdYlvIDLgwj5ktpaSzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ResturentCard