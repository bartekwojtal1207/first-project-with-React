
var data = {
  title: "temat kursu",
  description: "opis kursu",
  image : "img/logo.png",
  in_new: false,
  is_promo: false
}

var course =(
      <div className="media">
        <div className="media-left">
          <img src={data.image} alt="cover"/>
        </div>
        <div className="media-body">
          <h3>{data.title + ' dynamiczny'}<span className="label label-default">nowy</span></h3>
          <p>{data.description}</p>
          <p>Kurs jest w promocji</p>
        </div>
    </div>
)
ReactDOM.render(course,document.getElementById('root'));
