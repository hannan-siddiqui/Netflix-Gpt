import OpenAI from 'openai';
import { OpenAI_Key } from './constant';

const openai = new OpenAI({
  apiKey: OpenAI_Key, 
  dangerouslyAllowBrowser: true,
});

export default openai;