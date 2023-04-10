import {INdescription} from '/data.js';
import {INname} from '/data.js';
import {INmessage} from '/data.js';
import {random} from '/utils.js';
import {MadeCommentId} from '/utils.js';

const MadeComment=()=> ({
  id:MadeCommentId(),
  avatar: `img/avatar-${random(1,6)}.svg`,
  name: INname[random(0, INname.length-1)],
  message:INmessage[random(0, INmessage.length-1)],
});
const MadeMainArray=(id)=> ({
  id:id,
  url: `photos/${id}.jpg`,
  descrition: INdescription[random(0,INdescription.length-1)],
  likes:random(15,200),
  comments:Array.from({length:random(1,5)}, MadeComment)
});

export{MadeMainArray};
