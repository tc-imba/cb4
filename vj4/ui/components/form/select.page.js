import { AutoloadPage } from 'vj/misc/PageLoader';
import 'select2';
import 'select2/dist/css/select2.css';

const selectPage = new AutoloadPage('selectPage', () => {
  const $select2 = $('.select.select2').select2({
    sorter: (data) => {
      data.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
      console.log(data);
      return data;
    },
  }).on('select2:select', (e) => {
    e.params.data.timestamp = e.timeStamp;
    console.log(e);
  });
  console.log($select2);
});

export default selectPage;
