import React from 'react';
import S from './Services.module.css';


export const Services = () => {
    return (
        <div className={S.Services}>
            <div className={S.title}>
                <h2>Услуги</h2>
            </div>

            <div className={S.WrapperCards}>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://profnik.ru/upload/medialibrary/21d/21d17a11943fb7eb6a0541ec94b6d375.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Профилактика и гигиена полости рта</h4> 
                        </div>
                    </div>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://plaza-dent.ru/wp-content/uploads/2019/07/Terapevticheskaya-stomatologiya.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Стоматология терапевтическая</h4> 
                        </div>
                    </div>
                    
                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://dental-clinic.expert/wp-content/uploads/2019/05/Parodontologiya-500x500.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Стоматология косметическая</h4> 
                        </div>
                    </div>
                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://orbital-dent.ru/wp-content/uploads/2019/10/id-038.width-500.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Стоматология ортопедическая</h4> 
                        </div>
                    </div>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://lh3.googleusercontent.com/proxy/hGamlYrP9GfGOx7UuY0zbd2Vdjc94c8A4c4B3afoFjJRqbFbt-O7T76bJPkEPKsbW3umjPC8s6MYz64F8f3m7C_F-6E--YlAazVWb-euG3cH4A'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Стоматология хирургическая</h4> 
                        </div>
                    </div>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://lh3.googleusercontent.com/proxy/A9f4lBPgC1yKRsIgcAR6Wft49nPqYAOEEygVXxN5RsqDLgUXcPcAH3nUks3eaYMSX_dAeqjskx_84TSiZ5vn7OhOjZaAr05xNsViuBiNboDdqV3nm5GtQPcrVd-H-WQln6Ui2e4YfEEdc_D3uwnhvyRk2dWAs9AoIqQsfXsiqVg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Дентальная имплантация</h4> 
                        </div>
                    </div>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://www.ddmedic.ru/wp-content/uploads/2019/07/rentgenovskij-snimok-zuba.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Рентген зубов</h4> 
                        </div>
                    </div>
            </div>
        </div>
    )
}