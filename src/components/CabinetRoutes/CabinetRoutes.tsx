import React from 'react';
import PhilialBtn from '../ui/PhilialBtn/PhilialBtn';
import s from "./CabinetRoutes.module.scss"

const CabinetRoutes = () => {
    return (
        <div className={s.cabinet_routes}>
            <PhilialBtn showTickTitle title="Язык" tickTitle="Русский" />
            <PhilialBtn showTickTitle title="История записей"  />
            <PhilialBtn showTickTitle title="Дата рождения" tickTitle="11.11.2001" />
        </div>
    );
};

export default CabinetRoutes;