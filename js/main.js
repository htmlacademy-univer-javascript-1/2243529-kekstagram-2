import{random} from './utils.js';
import{MaxLine} from './utils.js';
import{MadeCommentId} from './utils.js';

import{INdescription} from './data.js';
import{INname} from './data.js';
import{INmessage} from './data.js';
if (MaxLine(INmessage[random(0, INmessage.length-1)].length,140)) {
  const MadeComments=()=>({
    id:MadeCommentId(),
    avatar: `img/avatar-${random(1,6)}.svg`,
    message: INmessage[random(0, INmessage.length-1)],
    name: INname[random(0, INname.length-1)]
  });
  const MadeMainArray=(id)=> ({
    id:id,
    url: `photos/${id}.jpg`,
    descrition: INdescription[random(0,INdescription.length-1)],
    comments:Array.from({length:random(1,5)}, MadeComments)
  });
  const MainArray =Array.from({length:25}, (v,k)=> MadeMainArray (k+1));
}
