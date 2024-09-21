import styles from './Button.module.css'

type Props = {
    id?: string,
    classNames?: string,
    text?: string,
    onClickHandler?: React.MouseEventHandler<HTMLButtonElement>,
    fa_icon_id? : string
}

function Button({ classNames, text, onClickHandler, fa_icon_id }: Props): JSX.Element
{
    return <>
        <button onClick={onClickHandler} className={classNames + " " + styles.btn + " transition hover:scale-[1.05] text-l text-white p-4 px-5 rounded-lg white uppercase self-start"}>
            {fa_icon_id ? <i className={'bg-transparent fa ' + fa_icon_id}></i> : <></>} {text}
        </button>
    </>
}

export default Button