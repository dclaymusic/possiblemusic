const col1 = [
    'angry',
    'sad',
    'calm',
    'creepy',
    'barbaric',
    'fancy',
    'grand',
    'nostalgic',
    'loud',
    'screeching',
    'alarming',
    'enlightening',
    'aesthetic',
    'scary',
    'overly peppy',
    'sad',
    'weird',
    'quiet',
    'hungry',
    'tired',
    'suspicious',
    'distrusting',
    'angry',
    'upbeat',
    'disappointing',
    'fast',
    'lively',
    'slow',
    'deep',
    'extremely quick',
    'tired',
    'dizzy',
    'confused',
    'depressing',
    'exciting',
    'squeaky'
]

const col2 = [
    'piano',
    'growling',
    'screaming',
    'guitar',
    'drums',
    'saxophone',
    'harmonica',
    'hair brushing',
    'children singing',
    'violin',
    'tuba',
    'drums',
    'accented notes',
    'body noises',
    'classical music',
    'country music',
    'rock music',
    'lo-fi',
    'jazz',
    'pop',
    'hip-hop',
    'violin',
    'rap songs',
    'bagpipe',
    'triangle solo'
]

const col3 = 
[
    'at a party',
    'at a theater',
    'but in a happy way',
    'for robots',
    'for doctors performing surgery',
    'at a birthday party',
    'in an unknown planet',
    'for a video game',
    'by a grumpy man',
    'at a baseball game',
    'at the beach',
    'for gamers',
    'for athletes',
    'in Texas',
    'for sad people',
    'for dogs',
    'for judgemental 80-year-olds',
    'for babies',
    'for cats',
    'in the mouth of the thinker',
    'at a funeral',
    'in an 8th grade classroom',
    'at a Walmart',
    'at church',
    'in heaven',
    'in Candyland',
    'inside a backpack',
    'with a British accent',
    'at preschool',
    'in an advertisement',
    'on the street',
    'from a car driving by with the windows down',
    'at a school',
    'on a TV show',
    'for elderly people',
    'for 5th graders',
]

function randomInt(max)
{
	rand_val = Math.floor(Math.random() * Math.floor(max + 1))
	return rand_val;
}

function findCombo()
{
    document.getElementById('col1').innerHTML = col1[randomInt(col1.length - 1)];
    document.getElementById('col2').innerHTML = col2[randomInt(col2.length - 1)];
    document.getElementById('col3').innerHTML = col3[randomInt(col3.length - 1)];
}
