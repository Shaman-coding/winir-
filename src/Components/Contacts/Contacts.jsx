import React from 'react';
import C from './Contacts.module.css';

export const Contacts = () => {

    return (
        <div className={C.wrapperContact}>


           <div className={C.WrapperInfo}>
            <div className={C.infoDescription}>
                    <div><h3>OOO "Винир+"</h3></div>
                        <p className={'address'}>Россия, г. Курск, <br/> ул. Черняховского, д.3 </p>
                        <p className={'Phone'}> <span>Телефон: </span> (4712) 33-16-00</p>
                        <p className={'Email'}><span>e-mail: </span> vinirkursk@mail.ru</p>
                        <h3>Часы работы:</h3>
                        <p>
                        понедельник - пятница с 9 до 21 часов <br/>
                        суббота с 9 до 15 часов <br/>
                        воскресенье - выходной 
                        </p>


                    </div>


                    <div className={C.infoDescription}>
                    <div><h3>OOO "Kолибри"</h3></div>
                        <p className={'adres'}>Россия, г. Курск, <br/>ул. Мыльникова, д.15а </p>

                        <p className={'Phone'}> <span>Телефон: </span> (4712) 39-11-32</p>
                        <p className={'Email'}><span>e-mail: </span> vinirkursk@mail.ru</p>
                        <h3>Часы работы:</h3>
                        <p>
                        понедельник - пятница с 9 до 21 часов <br/>
                        суббота - воскресенье - выходной
                        </p>


                    </div>
            </div>
            <hr/>
           
           <div className={C.WrapperMaps}>
                <div className={C.Maps}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d618.5466719890062!2d36.14777442119563!3d51.67472576890202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412f1ca792a1f7cf%3A0x92fd2dc9f87abb71!2z0KHRgtC-0LzQsNGC0L7Qu9C-0LPQuNGH0LXRgdC60LjQuSDQmtCw0LHQuNC90LXRgiwg0J7QntCeICLQstC40L3QuNGAKyI!5e0!3m2!1sru!2sru!4v1608285994490!5m2!1sru!2sru" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>

                
                <div className={C.MapsBlock}>
                        
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1132.9853123070345!2d36.13703300326497!3d51.73196649794105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412f02fc578204d1%3A0x768e8e52306dc061!2z0JrQntCb0JjQkdCg0JgsINGB0YLQvtC80LDRgtC-0LvQvtCz0LjRh9C10YHQutC40Lkg0LrQsNCx0LjQvdC10YI!5e0!3m2!1sru!2sru!4v1608285736712!5m2!1sru!2sru" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div> 
            </div>
        </div>
       
    )
}