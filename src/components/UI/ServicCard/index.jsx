import Image from "../../../assets/images/card_image.png";
import Korzinka from "../../../assets/icons/korzinka.svg";
import "./style.scss"
import React, { useState } from 'react';
import { Form, Input, Select, Modal } from 'antd';
const MyFormItemContext = React.createContext([]);

const Serviccard = ({ state: { title, image, description } }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (value) => {
        console.log(value);
    }
    function toArr(str) {
        return Array.isArray(str) ? str : [str];
    }
    const MyFormItemGroup = ({ prefix, children }) => {
        const prefixPath = React.useContext(MyFormItemContext);
        const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
        return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
    };
    const MyFormItem = ({ name, ...props }) => {
        const prefixPath = React.useContext(MyFormItemContext);
        const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
        return <Form.Item name={concatName} {...props} />;
    };

    const onChange = (value) => {
        // console.log(selected ${value});
    };
    const onSearch = (value) => {
        // console.log('search:', value);
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    return (
        <div className="card1 ">
            <img src={Image} alt="image" className="image" />
            <div className="texts">
                <div className="texts_tepa">
                    <p>5,957 Students</p>
                    <h6>01h 49m</h6>
                </div>
                <p className="texts_uchd">
                    {description.split(' ').slice(0, 2).join(' ')}
                </p>
                <div className="texts_pastt">
                    <h5>$33.99</h5>
                    <img src={Korzinka} alt="korzinka" onClick={() => showModal()} className="" />
                </div>
            </div>
            <Modal open={isModalOpen} cancelText="Bekor qilish" onCancel={handleCancel} onOk={handleOk} okText="Jo'natish">
                <div className='modal_top'>
                    <span>Xizmatlar</span>
                </div>
                <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                    <MyFormItemGroup prefix={['user']}>
                        <MyFormItemGroup prefix={['name']}>
                            <MyFormItem name="firstName" label="Ism familiya sharifingiz">
                                <Input placeholder='F.I.SH' required />
                            </MyFormItem>
                            <MyFormItem name="pnone_number" label="Telefon Raqamingiz">
                                <Input placeholder='90 000 00 00' />
                            </MyFormItem>
                            <MyFormItem name="type" label="Xizmatni tanlang">
                                <Select
                                    showSearch
                                    placeholder="Select..."
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
                                    options={[
                                        {
                                            value: 'service1',
                                            label: 'Web sahifa yaratish',
                                        },
                                        {
                                            value: 'service2',
                                            label: 'Mobil ilova yaratish',
                                        },
                                    ]}
                                />
                            </MyFormItem>
                        </MyFormItemGroup>
                    </MyFormItemGroup>
                </Form>
            </Modal>
        </div>
    );
};

export default Serviccard;