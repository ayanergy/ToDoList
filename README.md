
# To-do Lists using Javascript

This to-do list contains active and completed tasks containers which are connected via Javascript. The design was inspired by the [UI design](https://www.figma.com/community/file/1182683143786000762) by product designer [Danny Sapio](https://www.dannysapio.com/).
## 💡Features

All the below mentioned features are elaborated on in the usage examples section.

- Task category, urgency and required effort attributes
- Sorting based on deadline (earliest first)
- Date to day conversion (and vice versa)
- Quick deletion and transfer methods


## 🛠️ Usage examples

The basic UI is shown below. It contains three columns:
- **Input column** which consists of task name, category, deadline, effort, and urgency attributes.
- **Active tasks** which is located in the center and will display all active tasks and their attributes.
- **Completed tasks** which is located on the left and will display all completed tasks and their attributes.

![The basic UI](https://user-images.githubusercontent.com/91128540/218273165-cbe39f50-ebc9-4a51-8750-d0ccc27b845f.jpeg)

---

In order to clear all input fields, simply click on the add icon.

![Clear all input](https://user-images.githubusercontent.com/91128540/218273308-80766b34-e593-4d3b-b809-c01eb85ce011.jpeg)

---

Click on a task in the active column to complete it and move it to the completed tasks column. And, click on a task in the completed column to delete it.

![Click to complete and delete](https://user-images.githubusercontent.com/91128540/218273434-8756145b-07bd-4b30-a919-bd96e7c952b6.jpeg)

---

To complete all active tasks, simply click the active icon.

![Click to complete all](https://user-images.githubusercontent.com/91128540/218273517-f2b1f2a2-724e-42c4-abfd-3e1a774dc9fa.jpeg)

---

To delete all completed tasks, simply click the completed icon.

![Click to delete all](https://user-images.githubusercontent.com/91128540/218273625-168b2519-0b3f-418b-8463-53549b845a7c.jpeg)

---

Here's how the different task attributes are displayed:
- The **number** inside the colored circle represents the *effort* required - one meaning minimal effort and three meaning required effort.
- The **color** of the circle denotes the *urgency* attribute. Red represents urgent, orange represents required, and green represents secondary task.
- The **deadline** attribute is converted into *day* in the Javascript file. In order to know how to convert it back to date instead, check the next section.

![Displayed attributes](https://user-images.githubusercontent.com/91128540/218273811-306536a4-120f-4ab1-8423-3d857f0d63a3.jpeg)

## 🗓️ Day and date conversion

Here are the changes you need to make in order to convert from day to date and vice versa if required:

Update the Javascript *gday()* function like this
```javascript
function gday(deadline) {
  
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const date = new Date(deadline);
  let day = (date).toLocaleDateString();
  
  return day;
}
```

For UI aesthetic purposes, change decrease the border radius of the day/date shape from 20% to 10% in the CSS file like this
```css
.day {
    
    grid-column: 1;
    grid-row: 2;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    margin-top: 15px;
    margin-left: 5px;
    padding: 7px;
    
    width: fit-content;
    height: 18px;
    border-radius: 10%;
    background-color: var(--accent);
    
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    
}
```

Here's the output of the date version:

![Here's the date version](https://user-images.githubusercontent.com/91128540/218274108-296e83f1-564b-4287-84fe-207a11232e1d.jpeg)


## 🚀 About Me
Always learning, always building.

From being fascinated by the universe and previously wanting to pursue a career as a Theoretical Physicist, to currently building a startup that provides other students the opportunity to work at the edge of their curiosity - I’ve always wanted to solve problems, and build toward a better future.


## 📧 Feedback

I've recently learnt Javascript and am currently learning React JS.

If you have any feedback, please reach out to me at ayantask@gmail.com or links below.
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.isophote.com/ayan)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayanahmad/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/ayanergy)
