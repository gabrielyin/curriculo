import { Router } from 'express';
import { autalizarDados, deletarDados, insertDados, selectDados } from './Controller/personal.js';
import { insertDadosContatos } from './Controller/contato.js';

const router = Router();

// router.get('/', (req, res) => {
//     res.json({
//         "statusCode": 200,
//         "msg": "API rodando CV"
//     });
// });

router.get('/dados', selectDados);
router.post('/dados', insertDados);
router.delete('/dados', deletarDados);
router.put('/dados', autalizarDados);
router.post('/contato', insertDadosContatos);

export default router;