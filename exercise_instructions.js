// Exercise instructions database with video demonstrations
const exerciseInstructions = {
    // WARM UP
    'Warm Up': {
        video: 'https://www.youtube.com/embed/5Bf697FBJlo',
        steps: [
            'Start with 5-10 minutes of light cardio (treadmill, bike, or elliptical)',
            'Perform dynamic stretches targeting major muscle groups',
            'Do arm circles, leg swings, and torso rotations',
            'Include mobility work for joints you\'ll be using',
            'Gradually increase intensity to raise heart rate',
            'Finish with specific warm-up sets for your first exercise'
        ],
        tips: 'Never skip your warm-up! It prevents injury and improves performance.'
    },
    
    // BARBELL EXERCISES
    'Barbell Squat': {
        video: 'https://www.youtube.com/embed/ultWZbUMPL8',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Squat.gif',
        steps: [
            'Stand with feet shoulder-width apart, barbell on upper traps',
            'Keep chest up, core tight, and eyes forward',
            'Descend by bending knees and hips, keeping knees aligned with toes',
            'Lower until thighs are parallel to ground (or below)',
            'Drive through heels to return to starting position',
            'Keep back neutral throughout the movement'
        ],
        tips: 'Focus on depth and form over weight. Keep your core braced.'
    },
    'Barbell Deadlift': {
        video: 'https://www.youtube.com/embed/XxWcirHIwVo',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif',
        steps: [
            'Stand with feet hip-width apart, bar over mid-foot',
            'Bend at hips and knees, grip bar just outside legs',
            'Keep back flat, chest up, shoulders over or slightly in front of bar',
            'Drive through heels, extend hips and knees simultaneously',
            'Stand fully upright, squeezing glutes at top',
            'Lower bar under control by hinging at hips'
        ],
        tips: 'Keep the bar close to your body. Maintain neutral spine throughout.'
    },
    'Conventional Deadlift': {
        video: 'https://www.youtube.com/embed/XxWcirHIwVo',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif',
        steps: [
            'Stand with feet hip-width apart, bar over mid-foot',
            'Bend at hips and knees, grip bar just outside legs',
            'Keep back flat, chest up, shoulders over or slightly in front of bar',
            'Drive through heels, extend hips and knees simultaneously',
            'Stand fully upright, squeezing glutes at top',
            'Lower bar under control by hinging at hips'
        ],
        tips: 'Keep the bar close to your body. Maintain neutral spine throughout.'
    },
    'Barbell Bench Press - Flat': {
        video: 'https://www.youtube.com/embed/gRVjAtPip0Y',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif',
        steps: [
            'Lie on bench, feet flat on floor, eyes under bar',
            'Grip bar slightly wider than shoulder-width',
            'Unrack bar and position over chest',
            'Lower bar to mid-chest with control',
            'Press bar up and slightly back toward face',
            'Lock out arms at top without bouncing'
        ],
        tips: 'Retract shoulder blades and maintain arch in lower back. Touch chest lightly.'
    },
    'Barbell Stiff Leg Deadlift': {
        video: 'https://www.youtube.com/embed/1uDiW5--rAE',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/barbell-stiff-leg-deadlift.gif',
        steps: [
            'Stand holding barbell with overhand grip at thigh level',
            'Keep legs nearly straight with slight knee bend',
            'Hinge at hips, lowering bar down front of legs',
            'Lower until you feel stretch in hamstrings',
            'Squeeze glutes and hamstrings to return to standing',
            'Keep back neutral, shoulders pulled back'
        ],
        tips: 'Focus on the hip hinge movement. Feel the stretch in your hamstrings.'
    },
    'Barbell Shoulder Press': {
        video: 'https://www.youtube.com/embed/rrYMa6hPbv4',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/10/seated-barbell-overhead-press.gif',
        steps: [
            'Stand or sit with barbell at collarbone level',
            'Grip bar slightly wider than shoulder-width',
            'Press bar overhead in straight line',
            'Lock out arms directly above head',
            'Lower with control back to shoulders',
            'Keep core tight throughout'
        ],
        tips: 'Avoid leaning back excessively. Press in a straight vertical line.'
    },
    'Barbell Bent Over Row (Close Grip)': {
        video: 'https://www.youtube.com/embed/T3N-TO4reLQ',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/bent-over-barbell-row.gif',
        steps: [
            'Bend at hips with slight knee bend, torso nearly parallel to floor',
            'Grip bar with hands close together (shoulder-width or narrower)',
            'Pull bar to lower chest/upper abdomen',
            'Squeeze shoulder blades together at top',
            'Lower with control',
            'Keep back flat and core engaged'
        ],
        tips: 'Pull with your elbows, not your hands. Feel the contraction in your lats.'
    },
    'Barbell Rowing': {
        video: 'https://www.youtube.com/embed/T3N-TO4reLQ',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/bent-over-barbell-row.gif',
        steps: [
            'Bend at hips with slight knee bend, back flat',
            'Grip bar with hands shoulder-width apart',
            'Pull bar to lower chest/upper abdomen',
            'Squeeze shoulder blades together',
            'Lower bar with control',
            'Keep torso stationary'
        ],
        tips: 'Avoid using momentum. Keep your torso angle consistent.'
    },
    'Incline Barbell Press': {
        video: 'https://www.youtube.com/embed/zD6FFnF-k10',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/incline-barbell-bench-press.gif',
        steps: [
            'Lie on incline bench (30-45 degrees)',
            'Grip bar slightly wider than shoulders',
            'Lower bar to upper chest',
            'Press bar up and slightly back',
            'Fully extend arms at top',
            'Maintain shoulder blade retraction'
        ],
        tips: 'Target upper chest. Keep feet planted and core tight.'
    },
    'Close Grip Bench Press': {
        video: 'https://www.youtube.com/embed/nEF0bv2FW94',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/close-grip-barbell-bench-press.gif',
        steps: [
            'Lie on flat bench with narrow grip (hands shoulder-width)',
            'Keep elbows tucked close to sides',
            'Lower bar to lower chest',
            'Press bar straight up',
            'Lock out triceps at top',
            'Control the descent'
        ],
        tips: 'Focus on triceps engagement. Don\'t let elbows flare out.'
    },

    // DUMBBELL EXERCISES
    'Dumbbell Incline Chest Press': {
        video: 'https://www.youtube.com/embed/8iPEnn-ltC8',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/incline-dumbbell-press.gif',
        steps: [
            'Lie on incline bench with dumbbells at shoulder level',
            'Press dumbbells up and slightly together',
            'Fully extend arms at top',
            'Lower with control to stretch position',
            'Keep elbows at 45-degree angle from body',
            'Maintain stable shoulder position'
        ],
        tips: 'Squeeze chest at top. Control the weight on the way down.'
    },
    'Dumbbell Bicep Curls': {
        video: 'https://www.youtube.com/embed/JXdOz0wPHBQ',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif',
        steps: [
            'Stand with dumbbells at sides, palms forward',
            'Keep elbows stationary at sides',
            'Curl weights up toward shoulders',
            'Squeeze biceps at top',
            'Lower with control',
            'Avoid swinging or using momentum'
        ],
        tips: 'Keep elbows pinned. Focus on the squeeze at the top.'
    },
    'Dumbbell Seated Hammer Curls (Alternating)': {
        video: 'https://www.youtube.com/embed/zC3nLlEvin4',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-hammer-curl.gif',
        steps: [
            'Sit on bench with dumbbells at sides, palms facing each other',
            'Curl one dumbbell up toward shoulder',
            'Keep elbow stationary, palm facing in throughout',
            'Squeeze at top, then lower',
            'Alternate arms',
            'No swinging or momentum'
        ],
        tips: 'Hammer grip targets brachialis and forearms. Keep wrists neutral.'
    },
    'DB Standing Hammer Curls': {
        video: 'https://www.youtube.com/embed/zC3nLlEvin4',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-hammer-curl.gif',
        steps: [
            'Stand with dumbbells at sides, palms facing each other',
            'Curl both dumbbells up simultaneously',
            'Keep elbows close to sides',
            'Squeeze at top',
            'Lower with control',
            'Maintain neutral wrist position'
        ],
        tips: 'Great for forearm development. Keep form strict.'
    },
    'Dumbbell Bicep Curl (Alternating)': {
        video: 'https://www.youtube.com/embed/sAq_ocpRh_I',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/09/dumbbell-curl.gif',
        steps: [
            'Stand with dumbbells at sides, palms forward',
            'Curl one dumbbell while keeping other arm still',
            'Rotate palm slightly at top for peak contraction',
            'Lower and repeat with opposite arm',
            'Keep core stable',
            'No rocking or leaning'
        ],
        tips: 'Supinate wrist as you curl for maximum bicep activation.'
    },
    'Dumbbell Walking Lunge': {
        video: 'https://www.youtube.com/embed/L8fvypPrzzs',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/dumbbell-walking-lunge.gif',
        steps: [
            'Hold dumbbells at sides',
            'Step forward into lunge position',
            'Lower back knee toward ground',
            'Keep front knee over ankle',
            'Push through front heel to step forward',
            'Continue alternating legs'
        ],
        tips: 'Keep torso upright. Take controlled steps.'
    },
    'Dumbbell Crunches': {
        video: 'https://www.youtube.com/embed/Xyd_fa5zoEU',
        steps: [
            'Lie on back with dumbbell held at chest',
            'Bend knees, feet flat on floor',
            'Curl shoulders off ground toward hips',
            'Focus on contracting abs',
            'Lower with control',
            'Don\'t pull on neck'
        ],
        tips: 'Quality over quantity. Squeeze abs at top of movement.'
    },
    'Dumbbell Lateral Raise': {
        video: 'https://www.youtube.com/embed/9gfirDFXBi8',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',
        steps: [
            'Stand with dumbbells at sides, slight elbow bend',
            'Raise arms out to sides until parallel to floor',
            'Lead with elbows, not hands',
            'Pause at top',
            'Lower with control',
            'Keep slight forward lean'
        ],
        tips: 'Focus on side delts. Control the weight, don\'t swing.'
    },
    'Dumbbell Front Lateral Raise': {
        video: 'https://www.youtube.com/embed/3VcKaXpzqRo',
        steps: [
            'Stand with dumbbells in front of thighs',
            'Raise dumbbells forward to shoulder height',
            'Keep arms nearly straight with slight elbow bend',
            'Pause at top',
            'Lower with control',
            'Alternate or do both together'
        ],
        tips: 'Targets front delts. Avoid using momentum.'
    },
    'Dumbbell Rear Delt Flyes': {
        video: 'https://www.youtube.com/embed/EA7u4Q_8HQ0',
        steps: [
            'Bend forward at hips, back flat, dumbbells hanging',
            'Raise arms out to sides, squeezing shoulder blades',
            'Keep slight elbow bend',
            'Focus on rear delts',
            'Lower with control',
            'Avoid swinging'
        ],
        tips: 'Critical for shoulder balance. Feel it in rear delts, not lower back.'
    },
    'Dumbbell Overhead Tricep Extension (Seated)': {
        video: 'https://www.youtube.com/embed/YbX7Wd8jQ-Q',
        steps: [
            'Sit on bench with back support',
            'Hold one dumbbell overhead with both hands',
            'Lower dumbbell behind head by bending elbows',
            'Keep elbows pointing forward',
            'Extend arms to return to start',
            'Control the weight'
        ],
        tips: 'Keep elbows close together. Feel the stretch in triceps.'
    },

    // MACHINE EXERCISES
    'Leg Curl Machine': {
        video: 'https://www.youtube.com/embed/r6LZFrqv3wg',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/lying-leg-curl.gif',
        steps: [
            'Lie face down on machine, pad against lower calves',
            'Align knees with machine pivot',
            'Curl legs up toward glutes',
            'Squeeze hamstrings at top',
            'Lower with control',
            'Keep hips pressed into pad'
        ],
        tips: 'Isolates hamstrings. Don\'t let hips rise.'
    },
    'Lying Bilateral Leg Curls': {
        video: 'https://www.youtube.com/embed/r6LZFrqv3wg',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/lying-leg-curl.gif',
        steps: [
            'Lie face down, pad against lower calves',
            'Curl both legs simultaneously',
            'Squeeze hamstrings at top',
            'Lower slowly and with control',
            'Keep hips down',
            'Full range of motion'
        ],
        tips: 'Focus on hamstring contraction. Avoid momentum.'
    },
    'Seated Machine Calf Raises': {
        video: 'https://www.youtube.com/embed/JbyjNymZTE4',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/seated-calf-raise.gif',
        steps: [
            'Sit in machine with pads on knees',
            'Balls of feet on platform, heels hanging off',
            'Raise heels as high as possible',
            'Squeeze calves at top',
            'Lower heels below platform for stretch',
            'Control the movement'
        ],
        tips: 'Full range of motion. Pause at top and bottom.'
    },
    'Standing Machine Calf Raises': {
        video: 'https://www.youtube.com/embed/gwLzBJYoWlI',
        steps: [
            'Stand in machine with shoulders under pads',
            'Balls of feet on platform',
            'Raise heels as high as possible',
            'Hold peak contraction',
            'Lower for full stretch',
            'Keep legs nearly straight'
        ],
        tips: 'Go slow and controlled. Maximum range of motion.'
    },
    'Smith Machine Seated Overhead Press': {
        video: 'https://www.youtube.com/embed/W1SD96lrudY',
        steps: [
            'Sit on bench in Smith machine',
            'Unrack bar at shoulder level',
            'Press bar overhead in fixed path',
            'Lock out at top',
            'Lower to shoulders',
            'Keep core tight'
        ],
        tips: 'Stable movement pattern. Focus on shoulder activation.'
    },
    'Lat Pulldown (Machine)': {
        video: 'https://www.youtube.com/embed/HLJqYU1wPSY',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif',
        steps: [
            'Sit at machine, secure thighs under pad',
            'Grip bar wider than shoulder-width',
            'Pull bar down to upper chest',
            'Squeeze shoulder blades together',
            'Control the return',
            'Lean back slightly'
        ],
        tips: 'Pull with elbows, not hands. Feel it in your lats.'
    },
    'Unilateral Leg Extensions': {
        video: 'https://www.youtube.com/embed/YyvSfElaFmU',
        steps: [
            'Sit in machine, one leg at a time',
            'Extend leg to straighten knee',
            'Squeeze quadriceps at top',
            'Lower with control',
            'Complete reps then switch legs',
            'Keep back against pad'
        ],
        tips: 'Isolates each quad separately. Control both directions.'
    },

    // CABLE EXERCISES
    'Cable Pulldown (Pro Lat Bar)': {
        video: 'https://www.youtube.com/embed/HLJqYU1wPSY',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/wide-grip-lat-pulldown.gif',
        steps: [
            'Sit at cable machine with pro lat bar',
            'Grip bar with wide overhand grip',
            'Pull bar to upper chest',
            'Squeeze lats and shoulder blades',
            'Slowly return to start',
            'Keep torso stable'
        ],
        tips: 'Focus on lat engagement. Drive elbows down and back.'
    },
    'Cable Pulldown (Lats)': {
        video: 'https://www.youtube.com/embed/HLJqYU1wPSY',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/wide-grip-lat-pulldown.gif',
        steps: [
            'Sit at cable station, secure thighs',
            'Grip bar wide, palms forward',
            'Pull bar to collarbone level',
            'Squeeze shoulder blades',
            'Control the return up',
            'Slight lean back is ok'
        ],
        tips: 'Initiate with lats, not arms. Full stretch at top.'
    },
    'Cable Standing Twisting Crunch': {
        video: 'https://www.youtube.com/embed/pAplQXk3dkU',
        steps: [
            'Stand at cable machine, rope attachment overhead',
            'Hold rope beside head',
            'Crunch down and twist toward opposite knee',
            'Contract abs forcefully',
            'Return with control',
            'Alternate sides'
        ],
        tips: 'Targets obliques. Focus on rotation and contraction.'
    },
    'Cable Face Pull': {
        video: 'https://www.youtube.com/embed/dGF3UAIK75U',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/cable-face-pull.gif',
        steps: [
            'Set cable at upper chest height with rope',
            'Pull rope toward face, separating ends',
            'Pull elbows high and back',
            'Squeeze rear delts and upper back',
            'Control the return',
            'Keep chest up'
        ],
        tips: 'Excellent for shoulder health. High reps, focus on contraction.'
    },
    'Cable Standing Fly': {
        video: 'https://www.youtube.com/embed/taI4XduLpTk',
        steps: [
            'Stand between cables set at chest height',
            'Bring handles together in front of chest',
            'Keep slight elbow bend throughout',
            'Squeeze chest at peak contraction',
            'Control the return',
            'Slight forward lean'
        ],
        tips: 'Isolates chest. Focus on the squeeze.'
    },
    'Cable Pull Through': {
        video: 'https://www.youtube.com/embed/5JJiGP02cFY',
        steps: [
            'Stand facing away from low cable with rope',
            'Hold rope between legs',
            'Hinge at hips, keeping back flat',
            'Drive hips forward explosively',
            'Squeeze glutes at top',
            'Control the return'
        ],
        tips: 'Great for glutes and hamstrings. Hip hinge movement.'
    },
    'Cable Bar Pushdown': {
        video: 'https://www.youtube.com/embed/2-LAMcpzODU',
        steps: [
            'Stand at high cable with bar attachment',
            'Keep elbows pinned at sides',
            'Push bar down until arms fully extended',
            'Squeeze triceps at bottom',
            'Control the return',
            'Keep upper arms stationary'
        ],
        tips: 'Isolates triceps. Don\'t let elbows drift forward.'
    },
    'Seated Cable Row': {
        video: 'https://www.youtube.com/embed/xQNrFHEMhI4',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/cable-seated-row.gif',
        steps: [
            'Sit at cable row station, feet on platform',
            'Pull handle to lower chest/upper abdomen',
            'Squeeze shoulder blades together',
            'Keep back straight, chest up',
            'Control the return',
            'Slight torso movement is ok'
        ],
        tips: 'Pull with back, not arms. Feel it in mid-back.'
    },

    // OTHER EXERCISES
    'Pull Ups': {
        video: 'https://www.youtube.com/embed/eGo4IYlbE5g',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif',
        steps: [
            'Hang from bar with overhand grip, hands shoulder-width or wider',
            'Pull yourself up until chin over bar',
            'Lead with chest, not chin',
            'Squeeze lats at top',
            'Lower with control to full extension',
            'Avoid kipping or swinging'
        ],
        tips: 'King of back exercises. If needed, use assistance or do negatives.'
    },
    'Neutral Close Grip Pull Ups': {
        video: 'https://www.youtube.com/embed/eGo4IYlbE5g',
        steps: [
            'Hang from parallel bars (palms facing each other)',
            'Pull up until chin over bars',
            'Keep elbows close to body',
            'Squeeze lats and biceps',
            'Lower with control',
            'Full extension at bottom'
        ],
        tips: 'Easier than wide grip. Great for biceps and lats.'
    },
    'Hip Thrust': {
        video: 'https://www.youtube.com/embed/SaD0WlRGP0A',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif',
        steps: [
            'Sit on ground, upper back against bench',
            'Barbell over hips (use pad)',
            'Drive through heels, lift hips',
            'Squeeze glutes hard at top',
            'Lower with control',
            'Keep chin tucked'
        ],
        tips: 'Best glute builder. Full hip extension at top.'
    },
    'Bench Dip': {
        video: 'https://www.youtube.com/embed/0326dy_-CzM',
        steps: [
            'Place hands on bench behind you, feet extended forward',
            'Lower body by bending elbows',
            'Go down until upper arms parallel to floor',
            'Press back up to start',
            'Keep elbows close to body',
            'Can elevate feet for more difficulty'
        ],
        tips: 'Great for triceps. Don\'t go too deep to protect shoulders.'
    },
    'Skull Crusher': {
        video: 'https://www.youtube.com/embed/d_KZxkY_0cM',
        steps: [
            'Lie on bench with barbell or EZ-bar',
            'Hold bar with arms extended above chest',
            'Lower bar to forehead by bending elbows',
            'Keep upper arms stationary',
            'Extend arms back to start',
            'Control the weight'
        ],
        tips: 'Excellent triceps isolation. Keep elbows in.'
    },
    'The Romanian Deadlift': {
        video: 'https://www.youtube.com/embed/pWZLJeimJqY',
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif',
        steps: [
            'Hold barbell at thigh level',
            'Keep slight knee bend, not stiff legs',
            'Hinge at hips, lowering bar along legs',
            'Feel stretch in hamstrings',
            'Drive hips forward to return',
            'Keep bar close to body'
        ],
        tips: 'Hamstring and glute builder. Focus on hip hinge.'
    },
    'Bilateral Seated Leg Press': {
        video: 'https://www.youtube.com/embed/Qvu0wDBwULk',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/leg-press.gif',
        steps: [
            'Sit in leg press machine, feet shoulder-width on platform',
            'Lower weight by bending knees toward chest',
            'Keep lower back pressed into seat',
            'Press through heels to extend legs',
            'Don\'t lock knees at top',
            'Control both directions'
        ],
        tips: 'Safe squat alternative. Don\'t let lower back round.'
    },
    'Lying Leg Press': {
        video: 'https://www.youtube.com/embed/Qvu0wDBwULk',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/leg-press.gif',
        steps: [
            'Lie in leg press machine, feet on platform',
            'Lower platform toward chest',
            'Keep knees aligned with toes',
            'Press through full foot',
            'Extend legs nearly straight',
            'Maintain lower back contact'
        ],
        tips: 'Excellent quad builder. Full range of motion.'
    },
    'Hip Abduction and Adduction': {
        video: 'https://www.youtube.com/embed/6m6MNnxGdCM',
        steps: [
            'Sit in machine for abduction (legs apart) or adduction (legs together)',
            'Push legs apart against resistance (abduction)',
            'Or squeeze legs together (adduction)',
            'Control both directions',
            'Pause at peak contraction',
            'Keep upper body stable'
        ],
        tips: 'Strengthens hip stabilizers. Important for injury prevention.'
    },
    'Bench Supported Rows': {
        video: 'https://www.youtube.com/embed/dROjMDuT5j0',
        steps: [
            'Lie chest-down on incline bench with dumbbells',
            'Let arms hang straight down',
            'Pull dumbbells to sides of chest',
            'Squeeze shoulder blades together',
            'Lower with control',
            'Keep chest on bench'
        ],
        tips: 'Removes lower back from equation. Strict form.'
    },
    'Overhead Military Press / DB Shoulder Press': {
        video: 'https://www.youtube.com/embed/qEwKCR5JCog',
        steps: [
            'Stand or sit with dumbbells at shoulder height',
            'Press dumbbells overhead until arms extended',
            'Bring dumbbells together at top',
            'Lower with control to shoulders',
            'Keep core tight',
            'Avoid excessive arching'
        ],
        tips: 'Can do with barbell (military) or dumbbells. Great shoulder builder.'
    },
    'Band Lateral Raise': {
        video: 'https://www.youtube.com/embed/3VcKaXpzqRo',
        steps: [
            'Stand on resistance band, hold handles at sides',
            'Raise arms out to sides against band tension',
            'Go to shoulder height',
            'Control the return',
            'Keep slight elbow bend',
            'Focus on side delts'
        ],
        tips: 'Constant tension from bands. Great for high reps.'
    },
    
    // NEW EXERCISES FROM TMPD PLAN
    'Machine Chest Press': {
        video: 'https://www.youtube.com/embed/xUm0BiZCWlQ',
        steps: [
            'Sit on machine with back flat against pad',
            'Grip handles at chest level, elbows at 90 degrees',
            'Press handles forward until arms are extended',
            'Squeeze chest at full extension',
            'Return with control to starting position',
            'Keep core engaged and avoid arching back'
        ],
        tips: 'Safer than barbell bench for beginners. Focus on controlled movement.'
    },
    'Lever Pec Deck Fly': {
        video: 'https://www.youtube.com/embed/Z71vO4dDTwA',
        steps: [
            'Sit with back against pad, feet flat on floor',
            'Grab handles with arms extended to sides',
            'Bring handles together in front of chest',
            'Squeeze pecs at peak contraction',
            'Slowly return to starting position',
            'Maintain slight bend in elbows'
        ],
        tips: 'Great for chest isolation. Focus on the squeeze at the top.'
    },
    'Dumbbell Overhead Triceps Extension (Seated)': {
        video: 'https://www.youtube.com/embed/YbX7Wd8jQ-Q',
        steps: [
            'Sit on bench with back support',
            'Hold one dumbbell with both hands overhead',
            'Lower dumbbell behind head by bending elbows',
            'Keep upper arms stationary and vertical',
            'Extend arms back to starting position',
            'Control the weight throughout'
        ],
        tips: 'Targets the long head of triceps. Keep elbows close together.'
    },
    'Low One Arm Standing Rows': {
        video: 'https://www.youtube.com/embed/dIajXdXH90w',
        steps: [
            'Stand facing cable machine with low pulley',
            'Grab handle with one hand, step back',
            'Pull handle to side of torso',
            'Squeeze shoulder blade back',
            'Control the return',
            'Keep torso stable, slight forward lean'
        ],
        tips: 'Great for unilateral back development. Focus on squeezing the lat.'
    },
    'Cable Biceps Curl': {
        video: 'https://www.youtube.com/embed/6uZfNHRyHbE',
        steps: [
            'Stand facing low cable pulley',
            'Grab bar with underhand grip',
            'Keep elbows at sides, curl bar upward',
            'Squeeze biceps at top',
            'Lower with control',
            'Avoid swinging or using momentum'
        ],
        tips: 'Constant tension from cable. Keep elbows stationary.'
    },
    'Side Oblique Crunches': {
        video: 'https://www.youtube.com/embed/DJQGX2J4IVw',
        steps: [
            'Lie on side with bottom arm extended for support',
            'Place top hand behind head',
            'Contract obliques to lift upper body',
            'Focus on side crunch motion',
            'Lower with control',
            'Complete all reps before switching sides'
        ],
        tips: 'Great for targeting obliques. Quality over quantity.'
    },
    'Plate Side Bends': {
        video: 'https://www.youtube.com/embed/dL9ZzqtQI5c',
        steps: [
            'Stand holding weight plate at side',
            'Keep other hand behind head or at side',
            'Bend laterally at waist toward weighted side',
            'Return to upright position',
            'Feel stretch in opposite oblique',
            'Complete reps on one side before switching'
        ],
        tips: 'Avoid bending forward or backward. Pure lateral movement.'
    },
    'Side Plank': {
        video: 'https://www.youtube.com/embed/K2VljzCC16g',
        steps: [
            'Lie on side, prop up on forearm',
            'Stack feet or place top foot in front',
            'Lift hips off ground to form straight line',
            'Hold position with core engaged',
            'Keep shoulders, hips, and ankles aligned',
            'Breathe steadily throughout hold'
        ],
        tips: 'Great for oblique strength and stability. Keep hips elevated.'
    },
    'Bilateral Leg Extensions': {
        video: 'https://www.youtube.com/embed/YyvSfEWR3B0',
        steps: [
            'Sit on machine with back against pad',
            'Position legs under padded lever',
            'Extend both legs until straight',
            'Squeeze quads at top',
            'Lower with control',
            'Keep upper body stable'
        ],
        tips: 'Isolates quadriceps. Avoid locking knees forcefully.'
    },
    'Dumbbell Glute Bridge': {
        video: 'https://www.youtube.com/embed/DjZFRshrMgA',
        steps: [
            'Lie on back with knees bent, feet flat',
            'Place dumbbell on hips, hold with both hands',
            'Drive through heels to lift hips',
            'Squeeze glutes at top position',
            'Hold briefly at peak contraction',
            'Lower hips with control'
        ],
        tips: 'Great for glute activation. Focus on the squeeze at the top.'
    }
};
