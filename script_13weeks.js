// Complete 12-week workout tracker for Sandeep's training plan
// Weeks 1-4: 6-day split (Chart_09-Aug.pdf)
// Weeks 5-8: PPL program (Sandeep_-_PPL_coolci.pdf)
// Weeks 9-12: PPL program (Chart_05-Oct.pdf)

const workoutData = {
    // WEEKS 1-12: 6-day Push/Pull/Legs split (repeated twice per week)
    week1: [
        {
            day: 'Day 1',
            title: 'Push Day (Chest, Triceps, Abs)',
            exercises: [
                { name: 'Warm Up', sets: 1, reps: 'Duration', weight: 'Bodyweight', muscle: 'Full Body' },
                { name: 'Machine Chest Press', sets: 3, reps: '12, 10, 10', weight: 'Track weight', muscle: 'Chest' },
                { name: 'Lever Pec Deck Fly', sets: 3, reps: '12, 12, 10', weight: 'Track weight', muscle: 'Chest' },
                { name: 'Dumbbell Incline Chest Press', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Chest' },
                { name: 'Cable Bar Pushdown', sets: 3, reps: '12, 12, 12', weight: 'Track weight', muscle: 'Triceps' },
                { name: 'Dumbbell Overhead Triceps Extension (Seated)', sets: 3, reps: '12, 12, 12', weight: 'Track weight', muscle: 'Triceps' },
                { name: 'Bench Dip', sets: 3, reps: '12, 12, 12', weight: 'Bodyweight', muscle: 'Triceps' },
                { name: 'Crunches', sets: 3, reps: '12, 12, 12', weight: 'Bodyweight', muscle: 'Abs' },
                { name: 'Leg Raise', sets: 3, reps: '12, 12, 12', weight: 'Bodyweight', muscle: 'Abs' },
                { name: 'Plank', sets: 2, reps: 'Duration', weight: 'Bodyweight', muscle: 'Abs' }
            ]
        },
        {
            day: 'Day 2',
            title: 'Pull Day (Back, Biceps, Abs)',
            exercises: [
                { name: 'Warm Up', sets: 1, reps: 'Duration', weight: 'Bodyweight', muscle: 'Full Body' },
                { name: 'Cable Pulldown (Pro Lat Bar)', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Lats' },
                { name: 'Low One Arm Standing Rows', sets: 3, reps: '10, 10, 10', weight: 'Track weight', muscle: 'Lats' },
                { name: 'Seated Cable Row', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Lats' },
                { name: 'Cable Biceps Curl', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Biceps' },
                { name: 'Dumbbell Bicep Curl (Alternating)', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Biceps' },
                { name: 'Dumbbell Seated Hammer Curls', sets: 3, reps: '10, 10, 10', weight: 'Track weight', muscle: 'Biceps' },
                { name: 'Side Oblique Crunches', sets: 3, reps: '12, 12, 12', weight: 'Bodyweight', muscle: 'Abs' },
                { name: 'Plate Side Bends', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Abs' },
                { name: 'Side Plank', sets: 2, reps: 'Duration', weight: 'Bodyweight', muscle: 'Abs' }
            ]
        },
        {
            day: 'Day 3',
            title: 'Leg Day (Quads, Hamstrings, Glutes, Shoulders, Calves)',
            exercises: [
                { name: 'Warm Up', sets: 1, reps: 'Duration', weight: 'Bodyweight', muscle: 'Full Body' },
                { name: 'Bilateral Seated Leg Press', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Hamstrings' },
                { name: 'Bilateral Leg Extensions', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Quadriceps' },
                { name: 'Lying Bilateral Leg Curls', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Hamstrings' },
                { name: 'Dumbbell Glute Bridge', sets: 3, reps: 'Duration', weight: 'Track weight', muscle: 'Glutes' },
                { name: 'Overhead Military Press / DB Shoulder Press', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Shoulders' },
                { name: 'Dumbbell Lateral Raise', sets: 3, reps: '12, 12, 12', weight: 'Track weight', muscle: 'Shoulders' },
                { name: 'Standing Machine Calf Raises', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Calves' }
            ]
        },
        {
            day: 'Day 4',
            title: 'Push Day (Chest, Triceps, Abs)',
            exercises: [
                { name: 'Warm Up', sets: 1, reps: 'Duration', weight: 'Bodyweight', muscle: 'Full Body' },
                { name: 'Machine Chest Press', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Chest' },
                { name: 'Lever Pec Deck Fly', sets: 3, reps: '12, 12, 12', weight: 'Track weight', muscle: 'Chest' },
                { name: 'Dumbbell Incline Chest Press', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Chest' },
                { name: 'Cable Bar Pushdown', sets: 3, reps: '12, 12, 12', weight: 'Track weight', muscle: 'Triceps' },
                { name: 'Dumbbell Overhead Triceps Extension (Seated)', sets: 3, reps: '12, 12, 12', weight: 'Track weight', muscle: 'Triceps' },
                { name: 'Bench Dip', sets: 3, reps: '12, 12, 12', weight: 'Bodyweight', muscle: 'Triceps' },
                { name: 'Crunches', sets: 3, reps: '12, 12, 12', weight: 'Bodyweight', muscle: 'Abs' },
                { name: 'Leg Raise', sets: 3, reps: '12, 12, 12', weight: 'Bodyweight', muscle: 'Abs' },
                { name: 'Plank', sets: 2, reps: 'Duration', weight: 'Bodyweight', muscle: 'Abs' }
            ]
        },
        {
            day: 'Day 5',
            title: 'Pull Day (Back, Biceps, Abs)',
            exercises: [
                { name: 'Warm Up', sets: 1, reps: 'Duration', weight: 'Bodyweight', muscle: 'Full Body' },
                { name: 'Cable Pulldown (Pro Lat Bar)', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Lats' },
                { name: 'Low One Arm Standing Rows', sets: 3, reps: '10, 10, 10', weight: 'Track weight', muscle: 'Lats' },
                { name: 'Seated Cable Row', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Lats' },
                { name: 'Cable Biceps Curl', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Biceps' },
                { name: 'Dumbbell Bicep Curl (Alternating)', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Biceps' },
                { name: 'Dumbbell Seated Hammer Curls', sets: 3, reps: '10, 10, 10', weight: 'Track weight', muscle: 'Biceps' },
                { name: 'Side Oblique Crunches', sets: 3, reps: '12, 12, 12', weight: 'Bodyweight', muscle: 'Abs' },
                { name: 'Plate Side Bends', sets: 3, reps: '12, 10, 8', weight: 'Track weight', muscle: 'Abs' },
                { name: 'Side Plank', sets: 2, reps: 'Duration', weight: 'Bodyweight', muscle: 'Abs' }
            ]
        },
        {
            day: 'Day 6',
            title: 'Leg Day (Quads, Hamstrings, Glutes, Shoulders, Calves)',
            exercises: [
                { name: 'Warm Up', sets: 1, reps: 'Duration', weight: 'Bodyweight', muscle: 'Full Body' },
                { name: 'Bilateral Seated Leg Press', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Hamstrings' },
                { name: 'Bilateral Leg Extensions', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Quadriceps' },
                { name: 'Lying Bilateral Leg Curls', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Hamstrings' },
                { name: 'Dumbbell Glute Bridge', sets: 3, reps: 'Duration', weight: 'Track weight', muscle: 'Glutes' },
                { name: 'Overhead Military Press / DB Shoulder Press', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Shoulders' },
                { name: 'Dumbbell Lateral Raise', sets: 3, reps: '12, 12, 12', weight: 'Track weight', muscle: 'Shoulders' },
                { name: 'Standing Machine Calf Raises', sets: 3, reps: '15, 12, 10', weight: 'Track weight', muscle: 'Calves' }
            ]
        }
    ],
};

// Copy weeks 2-12 (all use the same 6-day workout)
for (let i = 2; i <= 12; i++) {
    workoutData[`week${i}`] = JSON.parse(JSON.stringify(workoutData.week1));
}

// Debug: Log workout data structure
console.log('Workout Data Structure:');
console.log('Week 1:', workoutData.week1 ? workoutData.week1.length + ' days' : 'MISSING');
console.log('Week 12:', workoutData.week12 ? workoutData.week12.length + ' days' : 'MISSING');

// State management
let currentWeek = 1;
let workoutProgress = {};

// Initialize app with authentication
document.addEventListener('DOMContentLoaded', async () => {
    // Require hardcoded PIN authentication
    const authenticated = await workoutAuth.verifyPin();
    
    if (!authenticated) {
        document.body.innerHTML = '<div style="color: white; text-align: center; padding: 50px;"><h1>❌ Access Denied</h1><p>Incorrect PIN. Please refresh the page to try again.</p></div>';
        return;
    }
    
    // Load progress (no encryption needed with shared PIN)
    workoutProgress = loadProgress();
    
    initializeApp();
    setupEventListeners();
    loadWeek(currentWeek);
    updateStats();
});

function initializeApp() {
    // Initialize progress for all 12 weeks if empty or missing weeks
    if (!workoutProgress) {
        workoutProgress = {};
    }
    
    // Ensure all weeks 1-12 are initialized (but don't overwrite existing data)
    let needsSave = false;
    for (let i = 1; i <= 12; i++) {
        const weekKey = `week${i}`;
        if (!workoutProgress[weekKey]) {
            workoutProgress[weekKey] = [{}, {}, {}, {}, {}, {}];
            needsSave = true;
        }
    }
    
    // Only save if we actually added new weeks
    if (needsSave) {
        saveProgress();
    }
}

function setupEventListeners() {
    // Week selector buttons
    document.querySelectorAll('.week-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const week = parseInt(e.target.dataset.week);
            switchWeek(week);
        });
    });

    // Reset button
    document.getElementById('resetProgress').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            resetAllProgress();
        }
    });

    // Export button
    document.getElementById('exportData').addEventListener('click', exportProgress);
}

function switchWeek(week) {
    currentWeek = week;
    
    // Update active button
    document.querySelectorAll('.week-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.week) === week) {
            btn.classList.add('active');
        }
    });
    
    loadWeek(week);
    updateStats();
}

function loadWeek(week) {
    const weekKey = `week${week}`;
    const workouts = workoutData[weekKey];
    const container = document.getElementById('workoutContainer');
    
    console.log('Loading week:', week, 'Key:', weekKey);
    console.log('Workouts found:', workouts ? workouts.length + ' days' : 'UNDEFINED');
    
    if (!workouts) {
        container.innerHTML = '<div style="color: white; padding: 20px; text-align: center;"><h3>Error: Week ' + week + ' data not found!</h3><p>Please check the console for details.</p></div>';
        console.error('Week data missing for:', weekKey);
        return;
    }
    
    container.innerHTML = '';
    
    workouts.forEach((workout, dayIndex) => {
        const workoutCard = createWorkoutCard(workout, weekKey, dayIndex);
        container.appendChild(workoutCard);
    });
}

function createWorkoutCard(workout, weekKey, dayIndex) {
    const card = document.createElement('div');
    card.className = 'workout-day';
    
    const progress = workoutProgress[weekKey][dayIndex] || {};
    const isCompleted = progress.completed || false;
    
    if (isCompleted) {
        card.classList.add('completed');
    }
    
    let exercisesHTML = workout.exercises.map((exercise, exerciseIndex) => {
        const isDone = progress.exercises && progress.exercises[exerciseIndex];
        const hasInstructions = exerciseInstructions[exercise.name];
        return `
            <div class="exercise-item ${isDone ? 'done' : ''}" data-exercise="${exerciseIndex}">
                <div class="exercise-name">
                    ${exercise.name}
                    ${hasInstructions ? `<button class="info-btn" onclick="showInstructions('${exercise.name.replace(/'/g, "\\'")}')">ℹ️ How to</button>` : ''}
                    <span class="muscle-tag">${exercise.muscle}</span>
                </div>
                <div class="exercise-details">
                    <span>📊 ${exercise.sets} sets</span>
                    <span>🔢 ${exercise.reps} reps</span>
                    <span>⚖️ ${exercise.weight}</span>
                </div>
                <div class="done-checkbox">
                    <input type="checkbox" ${isDone ? 'checked' : ''} 
                           onchange="toggleExercise('${weekKey}', ${dayIndex}, ${exerciseIndex}, this.checked)">
                    <label>Done</label>
                </div>
            </div>
        `;
    }).join('');
    
    card.innerHTML = `
        <div class="workout-header">
            <div>
                <div class="workout-title">${workout.day} - ${workout.title}</div>
                <div class="workout-date">Week ${currentWeek}</div>
            </div>
            <div class="complete-checkbox">
                <input type="checkbox" ${isCompleted ? 'checked' : ''}
                       onchange="toggleWorkoutComplete('${weekKey}', ${dayIndex}, this.checked)">
                <label>Complete Workout</label>
            </div>
        </div>
        <div class="exercises-list">
            ${exercisesHTML}
        </div>
        <div class="notes-section">
            <label><strong>Notes:</strong></label>
            <textarea placeholder="Add notes about this workout..." 
                      onchange="saveNotes('${weekKey}', ${dayIndex}, this.value)">${progress.notes || ''}</textarea>
        </div>
    `;
    
    return card;
}

function toggleExercise(weekKey, dayIndex, exerciseIndex, checked) {
    if (!workoutProgress[weekKey][dayIndex].exercises) {
        workoutProgress[weekKey][dayIndex].exercises = {};
    }
    
    workoutProgress[weekKey][dayIndex].exercises[exerciseIndex] = checked;
    saveProgress();
    updateStats();
    
    // Visual feedback
    const exerciseItem = document.querySelector(`[data-exercise="${exerciseIndex}"]`);
    if (checked) {
        exerciseItem.classList.add('done');
    } else {
        exerciseItem.classList.remove('done');
    }
}

function toggleWorkoutComplete(weekKey, dayIndex, checked) {
    workoutProgress[weekKey][dayIndex].completed = checked;
    
    // If marking as complete, mark all exercises as done
    if (checked) {
        const workout = workoutData[weekKey][dayIndex];
        workoutProgress[weekKey][dayIndex].exercises = {};
        workout.exercises.forEach((_, index) => {
            workoutProgress[weekKey][dayIndex].exercises[index] = true;
        });
        workoutProgress[weekKey][dayIndex].completedDate = new Date().toISOString();
    }
    
    saveProgress();
    loadWeek(currentWeek);
    updateStats();
}

function saveNotes(weekKey, dayIndex, notes) {
    workoutProgress[weekKey][dayIndex].notes = notes;
    saveProgress();
}

function updateStats() {
    let totalCompleted = 0;
    let totalWorkouts = 0;
    
    Object.keys(workoutData).forEach(weekKey => {
        workoutData[weekKey].forEach((_, dayIndex) => {
            totalWorkouts++;
            if (workoutProgress[weekKey] && workoutProgress[weekKey][dayIndex] && 
                workoutProgress[weekKey][dayIndex].completed) {
                totalCompleted++;
            }
        });
    });
    
    const completionRate = totalWorkouts > 0 ? Math.round((totalCompleted / totalWorkouts) * 100) : 0;
    
    document.getElementById('currentWeek').textContent = currentWeek;
    document.getElementById('completedWorkouts').textContent = totalCompleted;
    document.getElementById('totalSessions').textContent = `${totalCompleted}/${totalWorkouts}`;
    document.getElementById('completionRate').textContent = `${completionRate}%`;
}

function saveProgress() {
    localStorage.setItem('workoutProgress', JSON.stringify(workoutProgress));
}

function loadProgress() {
    const saved = localStorage.getItem('workoutProgress');
    return saved ? JSON.parse(saved) : {};
}

function resetAllProgress() {
    workoutProgress = {};
    for (let i = 1; i <= 12; i++) {
        workoutProgress[`week${i}`] = [{}, {}, {}, {}, {}, {}];
    }
    saveProgress();
    loadWeek(currentWeek);
    updateStats();
}

function exportProgress() {
    const dataStr = JSON.stringify(workoutProgress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `workout-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('Progress exported successfully!');
}

// Exercise instructions functions
function showInstructions(exerciseName) {
    const instructions = exerciseInstructions[exerciseName];
    if (!instructions) {
        alert('Instructions not available for this exercise.');
        return;
    }
    
    const modal = document.getElementById('instructionsModal');
    const nameEl = document.getElementById('exerciseName');
    const stepsEl = document.getElementById('exerciseSteps');
    const tipsEl = document.getElementById('exerciseTips');
    
    nameEl.textContent = exerciseName;
    
    // Add video if available
    let videoHTML = '';
    if (instructions.video) {
        const videoId = instructions.video.split('/embed/')[1]?.split('?')[0];
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(exerciseName + ' tutorial')}`;
        videoHTML = `
            <div class="video-section">
                <a href="${youtubeUrl}" target="_blank" class="watch-youtube-btn">
                    ▶️ Watch Tutorial on YouTube
                </a>
                <a href="${searchUrl}" target="_blank" class="watch-youtube-btn" style="background: #667eea; margin-left: 10px;">
                    🔍 Search YouTube
                </a>
                <p class="video-note">If the video link doesn't work, use the search button to find tutorials</p>
            </div>
        `;
    }
    
    stepsEl.innerHTML = videoHTML + '<h3>📋 How to perform:</h3><ol>' + 
        instructions.steps.map(step => `<li>${step}</li>`).join('') + 
        '</ol>';
    
    tipsEl.innerHTML = `<div class="tip-box"><strong>💡 Pro Tip:</strong> ${instructions.tips}</div>`;
    
    modal.style.display = 'block';
}

function closeInstructions() {
    document.getElementById('instructionsModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('instructionsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
