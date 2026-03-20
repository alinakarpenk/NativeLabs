### Лаборатораторна №1

#### Інструкція запуску

```
git clone https://github.com/alinakarpenk/ReactNativeLabs.git
npm install
npm start
npx expo start
```


#### У додатку реалізовано: 
- Екран новин
- Екран контактів
- Стекова навігація
- Drawer навігація
- Екран деталей новини

#### ContactsScreen:

- Container - стилізований SectionList
- renderItem - для відображення кожного контакту
- renderSectionHeader - для відображення загаловку секції

#### NewsScreen:

- збереження стану загрузки
``` js
   const [refreshing, setRefreshing] = React.useState(false)
   ``` 

- виклик функції setTimeout для імітації вигляду загрузки на 2 секунди
```js
  
  const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
  
```

- onEndReached – викликає loadMore при прокрутці до кінця.
- loadMore – додає копії існуючих постів у кінець списку (для імітації підвантаження).
- refreshControl – додає Pull-to-Refresh.


#### Скріншоти:

![IMAGE](/lab2/assets/image/5325792325474652833.jpg)
![IMAGE](/lab2/assets/image/5325792325474652834.jpg)
![IMAGE](/lab2/assets/image/5325792325474652835.jpg)
![IMAGE](/lab2/assets/image/5325792325474652836.jpg)


