import clsx from "clsx";
import styles from './category-and-text-input.module.css';

import { useState } from "react";
import { BsTags, BsSearch } from 'react-icons/bs';

export default function CategoryAndTextInput({ categories, onCategoryChange, onTextChange, placeholder }) {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchText, setSearchText] = useState("");

    function onInputTextChange(e) {
        let value = e.target.value;
        setSearchText(value);
        onTextChange(value);
    }

    function onCategoryClick(clickedCategory) {
        let newCategory = "";
        if (clickedCategory != selectedCategory) {
            newCategory = clickedCategory;
        }
        setSelectedCategory(newCategory);
        onCategoryChange(newCategory);
    }

    function textComparator(a, b) {
        if (a < b) return -1;
        if (a > b) return  1;
        return 0;
    }

    function categoryClass(category) {
        return clsx({
            [styles.categoryItem]: true,
            [styles.selected]: selectedCategory == category
        });
    }

    return (
        <div className={styles.container}>
            <div>
                <label><BsSearch className={styles.seachingIcons}/></label>
                <input className={styles.textInput} type="text" placeholder={placeholder} value={searchText} onChange={onInputTextChange}></input>
            </div>
            <div>
                <BsTags className={styles.seachingIcons}/>
                {
                    categories
                        .sort(textComparator)
                        .map((c, index) => <span key={index} className={categoryClass(c)} onClick={() => onCategoryClick(c)}>{c}</span>)
                }
            </div>
        </div>
    );
}