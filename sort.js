let tag_but_s = document.getElementsByTagName('button');
//Убирать выбор из списка сделать потом 
let table = document.getElementsByTagName('table');
table = table[0].children[0];
    let res = [];
    for(let i = 1; i < table.children.length; i++){
        let tmp = {}
        tmp['Тип'] = table.children[i].children[0].innerHTML;
        tmp['Название'] = table.children[i].children[1].innerHTML;
        tmp['Время приготовления'] = table.children[i].children[2].innerHTML;
        tmp['Сложность'] = table.children[i].children[3].innerHTML;
        res.push(tmp);
    }
    
let select = document.getElementsByTagName('select');

select[0].onclick = function(){
    let option = select[1].getElementsByTagName('option');
    for(let i = 0; i < option.length; i++){
        if(option[i].hidden == true){
            option[i].hidden = false;
        }
    }
}

select[1].onclick = function(){
    let option = select[1].getElementsByTagName('option');
    let l = select[0].value; 
    for(let i = 0; i < option.length; i++){
        if(option[i].innerHTML == select[1].children[l].innerHTML && option[i].innerHTML != 'Нет'){
            option[i].hidden = true;
        }
    }
    option = select[2].getElementsByTagName('option');
    for(let i = 0; i < option.length; i++){
        if(option[i].hidden == true){
            option[i].hidden = false;
        }
    }
}

select[2].onclick = function(){
    let option = select[2].getElementsByTagName('option');
    let l = select[0].value; 
    let l2 = select[1].value; 
    for(let i = 0; i < option.length; i++){
        if((option[i].innerHTML == select[1].children[l].innerHTML || option[i].innerHTML == select[2].children[l2].innerHTML) && option[i].innerHTML != 'Нет'){
            option[i].hidden = 'true';
        }
    }
    
}
//Клик на сортировку
tag_but_s[0].onclick = function(){
    let tag_select = document.getElementsByTagName('select');
    let l1 = tag_select[0].value;
    let l2 = tag_select[1].value;
    let l3 = tag_select[2].value;
    if (tag_select[0].children[l1].innerHTML == 'Нет'){
        alert('Заполните первое поле');
    } else if (tag_select[0].children[l1].innerHTML != 'Нет'&& tag_select[1].children[l2].innerHTML == 'Нет' && tag_select[2].children[l3].innerHTML != 'Нет'){
        alert('Заполните второе поле');
    } else {
        res.sort(compare = function(a, b){
        if(tag_select[0].children[l1].innerHTML != 'Сложность' && tag_select[0].children[l1].innerHTML != 'Время приготовления' && a[tag_select[0].children[l1].innerHTML] > b[tag_select[0].children[l1].innerHTML]) return 1;
        else if(tag_select[0].children[l1].innerHTML != 'Сложность' && tag_select[0].children[l1].innerHTML != 'Время приготовления' && a[tag_select[0].children[l1].innerHTML] < b[tag_select[0].children[l1].innerHTML]) return -1;
        else if((tag_select[0].children[l1].innerHTML == 'Сложность' || tag_select[0].children[l1].innerHTML == 'Время приготовления') && +(a[tag_select[0].children[l1].innerHTML]) > +(b[tag_select[0].children[l1].innerHTML])) return 1;
        else if((tag_select[0].children[l1].innerHTML == 'Сложность' || tag_select[0].children[l1].innerHTML == 'Время приготовления') && +(a[tag_select[0].children[l1].innerHTML]) < +(b[tag_select[0].children[l1].innerHTML])) return -1;
        else if(tag_select[1].children[l2].innerHTML != 'Сложность' && tag_select[1].children[l2].innerHTML != 'Время приготовления' && tag_select[1].children[l2].innerHTML != "Нет" && a[tag_select[1].children[l2].innerHTML] > b[tag_select[1].children[l2].innerHTML]) return 1;
        else if((tag_select[1].children[l2].innerHTML != 'Сложность' && tag_select[1].children[l2].innerHTML != 'Время приготовления') && tag_select[1].children[l2].innerHTML != "Нет" && a[tag_select[1].children[l2].innerHTML] < b[tag_select[1].children[l2].innerHTML]) return -1;
        else if((tag_select[1].children[l2].innerHTML == 'Сложность' || tag_select[1].children[l2].innerHTML == 'Время приготовления')&& tag_select[1].children[l2].innerHTML != "Нет" && +(a[tag_select[1].children[l2].innerHTML]) > +(b[tag_select[1].children[l2].innerHTML])) return 1;
        else if((tag_select[1].children[l2].innerHTML == 'Сложность' || tag_select[1].children[l2].innerHTML == 'Время приготовления') && tag_select[1].children[l2].innerHTML != "Нет" && +(a[tag_select[1].children[l2].innerHTML]) < +(b[tag_select[1].children[l2].innerHTML])) return -1;
        else if(tag_select[2].children[l3].innerHTML != 'Сложность' && tag_select[2].children[l3].innerHTML != 'Время приготовления' && tag_select[2].children[l3].innerHTML != "Нет" && a[tag_select[2].children[l3].innerHTML] > b[tag_select[2].children[l3].innerHTML]) return 1;
        else if(tag_select[2].children[l3].innerHTML != 'Сложность' && tag_select[2].children[l3].innerHTML != 'Время приготовления' && tag_select[2].children[l3].innerHTML != "Нет" && a[tag_select[2].children[l3].innerHTML] < b[tag_select[2].children[l3].innerHTML]) return -1;
        else if((tag_select[2].children[l3].innerHTML == 'Сложность' || tag_select[2].children[l3].innerHTML == 'Время приготовления') && tag_select[2].children[l3].innerHTML != "Нет" && +(a[tag_select[2].children[l3].innerHTML]) > +(b[tag_select[2].children[l3].innerHTML])) return 1;
        else return -1;
        return 0;
    } );
    
    
    let tmp = Object.keys(res[0]);
    for(let i = 1; i < table.children.length; i++){
        for (let j = 0; j < 4; j++)
        {
            table.children[i].children[j].innerHTML = res[i-1][tmp[j]];
        }
    }
    //Вывод элкментов массива(таблицы)
    /*for(let i = 0; i < res.length; i++){
        for(let key in res[i]) {
            document.write(res[i][key]);
        }
    }*/
    }
    
}

tag_but_s[1].onclick = function(){
    let tag_input = document.getElementsByTagName('input');
    let type = tag_input[0].value;
    let time_1 = +tag_input[1].value;
    let time_2 = +tag_input[2].value;
    let level_1 = +tag_input[3].value;
    let level_2 = +tag_input[4].value;
    if( time_1 <= -1 || time_1 % parseInt(time_1) != 0 || time_1 >= 301){
        alert("Ошибочное число 1");
    } else if ( time_2 <= 0 || time_2 % parseInt(time_2) != 0 || time_2 >= 301 || time_1 > time_2){
        alert("Ошибочное число 2");
    } else if ( level_1 <= -1 || level_1 % parseInt(level_1) != 0 || level_1 >= 11 ){
        alert("Ошибочное число 3");
    } else if ( level_2 <= 0 || level_2 % parseInt(level_2) != 0 || level_2 >= 11 || level_1 > level_2){
        alert("Ошибочное число 4");
    }else {
        //alert ('Все хорошо');
        type = type.toLowerCase();
        type = type.substring(0, 1).toUpperCase() + type.substring(1, type.length);

        let F_arr = [];

        //Релизовать поиск по массиву 
        for(let i = 0; i < res.length; i++)
        {
            if(res[i]['Тип'] == type){
                if(res[i]['Время приготовления'] >= time_1 && res[i]['Время приготовления'] <= time_2){
                    if(res[i]['Сложность'] >= level_1 && res[i]['Сложность'] <= level_2){
                        F_arr.push(res[i]);
                    }
                }
            }
        }
        //Красивый вывод 
        let tmp = Object.keys(res[0]);
        for(let i = 1; i < table.children.length; i++){
            for (let j = 0; j < 4; j++)
            {
                if( i - 1 < F_arr.length)
                {
                    table.children[i].children[j].innerHTML = F_arr[i-1][tmp[j]];
                } else table.children[i].children[j].innerHTML = ' ';
                
            }
        }
       /* for(let i = 0; i < F_arr.length; i++){
            for(let key in F_arr[i]) {
                document.write(F_arr[i][key]);
            }
        }*/
    }
    
}

//Сортировка рабочая
//Подумать над выпадающим списком и скрывающимся элементами 
// Фильтрация
