import herolist from './herolist.json';
export default {
    'post /api/web201605/js/herolist.json': (req, res) => {
      const { ename } = req.body;
      const filteredList = herolist.filter(item => item.ename === parseInt(ename, 10))[0];
      res.send(filteredList);
    }
};