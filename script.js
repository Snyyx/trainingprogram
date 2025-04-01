// Training program data
const trainingProgram = [
    {
        day: "Day 1 - Push Focus",
        exercises: [
                    { name: "Handstand pushup", type: "push", sets: 3, reps: "8 - 12", image: "Images/Handstand pushup.png" },
                    { name: "Incline push-up", type: "push", sets: 3, reps: "8 - 12", image: "Images/Incline push-up.png" },
                    { name: "Dips", type: "push", sets: 3, reps: "10 - 15", image: "Images/Dips.png" },
                    { name: "Overhead tricep", type: "push", sets: 3, reps: "10 - 15", image: "Images/Overhead tricep.png" }
        ]
    },
    {
        day: "Day 2 - Legs Focus",
        exercises: [
                    { name: "Squat", type: "legs", sets: 3, reps: "8 - 12", image: "Images/Squat.png" },
                    { name: "Split Squat", type: "legs", sets: 3, reps: "10 - 20", image: "Images/Split Squat.png" },
                    { name: "Hamstring Curl", type: "legs", sets: 3, reps: "10 - 15", image: "Images/Hamstring Curl.png" },
                    { name: "Calf Raise", type: "legs", sets: 3, reps: "Max", image: "Images/Calf Raise.png" }
        ]
    },
    {
        day: "Day 3 - Pull Focus",
        exercises: [
                    { name: "Pull-Up", type: "pull", sets: 3, reps: "6 - 10", image: "Images/Pull-Up.png" },
                    { name: "Lat Pull-Up", type: "pull", sets: 3, reps: "8 - 12", image: "Images/Lat Pull-Up.png" },
                    { name: "Dumbbell row", type: "pull", sets: 3, reps: "10 - 15", image: "Images/Dumbbell row.png" },
                    { name: "Dumbbell Facepull", type: "pull", sets: 3, reps: "10 - 20", image: "Images/Dumbbell Facepull.png" },
                    { name: "Dumbbell Curl", type: "pull", sets: 3, reps: "8 - 12", image: "Images/Dumbbell Curl.png" }
        ]
    },
    {
        day: "Day 4 - Rest",
        exercises: [
                    { name: "Run / Light Exercise", type: "rest", sets: "", reps: "", image: "Images/Run Light Exercise.png" }
        ]
    },
    {
        day: "Day 5 - Push Focus",
        exercises: [
                    { name: "Dips", type: "push", sets: 3, reps: "6 - 8", image: "Images/Dips.png" },
                    { name: "Overhead press", type: "push", sets: 2, reps: "8 - 12", image: "Images/Overhead press.png" },
                    { name: "Push-Up", type: "push", sets: 3, reps: "10 - 15", image: "Images/Push-Up.png" },
                    { name: "Overhead Tricep", type: "push", sets: 3, reps: "10 - 15", image: "Images/Overhead Tricep.png" },
                    { name: "Lateral Raise", type: "push", sets: 3, reps: "Max", image: "Images/Lateral Raise.png" }
        ]
    },
    {
        day: "Day 6 - Pull Focus",
        exercises: [
                    { name: "Chin-Up", type: "pull", sets: 3, reps: "8 - 12", image: "Images/Chin-Up.jpg" },
                    { name: "Dumbbell Row", type: "pull", sets: 3, reps: "8 - 12", image: "Images/Dumbbell Row.png" },
                    { name: "Pull-Up", type: "pull", sets: 3, reps: "8 - 12", image: "Images/Pull-Up.png" },
                    { name: "Dumbbell Curl", type: "pull", sets: 3, reps: "8 - 12", image: "Images/Dumbbell Curl.png" }
        ]
    },
    {
        day: "Day 7 - Rest",
        exercises: [
                    { name: "Run / Light Exercise", type: "rest", sets: "", reps: "", image: "Images/Run Light Exercise.png" }
        ]
    }
];

// Function to generate workout cards
function renderWorkoutProgram() {
    const workoutDaysContainer = document.querySelector('.workout-days');
    
    trainingProgram.forEach(dayPlan => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = dayPlan.day;
        
        const exerciseList = document.createElement('ul');
        exerciseList.className = 'exercise-list';
        
        dayPlan.exercises.forEach((exercise, index) => {
            const exerciseItem = document.createElement('li');
            exerciseItem.className = 'exercise-item';
            
            const typeSpan = document.createElement('span');
            typeSpan.className = `exercise-type type-${exercise.type}`;
            typeSpan.textContent = exercise.type.charAt(0).toUpperCase() + exercise.type.slice(1);
            
            const exerciseName = document.createElement('span');
            exerciseName.className = 'exercise-name';
            exerciseName.textContent = exercise.name;
            
            const exerciseDetails = document.createElement('div');
            exerciseDetails.className = 'exercise-details';
            
            const setsSpan = document.createElement('span');
            setsSpan.textContent = exercise.sets ? `Sets: ${exercise.sets}` : '';
            
            const repsSpan = document.createElement('span');
            repsSpan.textContent = exercise.reps ? `Reps: ${exercise.reps}` : '';
            
            // Image popup with dynamic positioning
            const imagePopup = document.createElement('div');
            imagePopup.className = 'image-popup';
            
            // Dynamic viewport-aware positioning
            const updatePopupPosition = () => {
                const cardRect = dayCard.getBoundingClientRect();
                const popupWidth = 400;
                const viewportPadding = 20;
                
                // Calculate available space on both sides
                const spaceRight = window.innerWidth - cardRect.right - viewportPadding;
                const spaceLeft = cardRect.left - viewportPadding;
                
                // Default to right side if enough space or if left space is insufficient
                if (spaceRight >= popupWidth || spaceRight > spaceLeft) {
                    imagePopup.style.left = '105%';
                    imagePopup.style.right = 'auto';
                    imagePopup.style.transform = 'translateY(-50%)';
                } else {
                    imagePopup.style.left = 'auto';
                    imagePopup.style.right = '105%';
                    imagePopup.style.transform = 'translateY(-50%)';
                }
                
                // Center-aligned popups for middle cards
                if (cardRect.left > popupWidth && 
                    cardRect.right < window.innerWidth - popupWidth) {
                    imagePopup.style.left = '50%';
                    imagePopup.style.right = 'auto';
                    imagePopup.style.transform = 'translate(-50%, -50%)';
                }
            };

            // Set initial position and update on hover/resize
            exerciseItem.addEventListener('mouseenter', updatePopupPosition);
            window.addEventListener('resize', updatePopupPosition);
            
            const image = document.createElement('img');
            image.src = exercise.image; 
            image.alt = exercise.name;
            
            imagePopup.appendChild(image);
            exerciseDetails.appendChild(setsSpan);
            exerciseDetails.appendChild(repsSpan);
            
            exerciseItem.appendChild(typeSpan);
            exerciseItem.appendChild(exerciseName);
            exerciseItem.appendChild(exerciseDetails);
            exerciseItem.appendChild(imagePopup);
            
            exerciseList.appendChild(exerciseItem);
        });
        
        dayCard.appendChild(dayHeader);
        dayCard.appendChild(exerciseList);
        
        workoutDaysContainer.appendChild(dayCard);
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderWorkoutProgram();
});
