import React,{Component} from "react";
// import './Attendance.css';
export default class Attendance extends Component {
    render(){
        return(
            <>
            <div className="head">
                 <mark align="center"  >Attendance</mark>
            </div>
            <div>
                
                
                <table id="dtBasicExample" className="table">
  <thead>
    <tr>
      <th class="th-sm">SNo

      </th>
      <th class="th-sm">Course_code

      </th>
      <th class="th-sm">Course

      </th>
      <th class="th-sm">Section

      </th>
      <th class="th-sm">Year

      </th>
      <th class="th-sm">Sem

      </th>
      <th class="th-sm">TotalClasses

      </th>
      <th class="th-sm">AttendandClasses

      </th>
      <th class="th-sm">Percentage

      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.</td>
      <td>21CS200123AA</td>
      <td>DAA</td>
      <td>1</td>
      <td>2022-2023</td>
      <td>EvenSem</td>
      <td>40</td>
      <td>32</td>
      <td>90%</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>21CS200124RA</td>
      <td>MernStack</td>
      <td>2</td>
      <td>2022-2023</td>
      <td>EvenSem</td>
      <td>32</td>
      <td>28</td>
      <td>92%</td>
    </tr>
    <tr>
      <td>3.</td>
      <td>21CS200125RA</td>
      <td>Operating Systems</td>
      <td>3</td>
      <td>2022-2023</td>
      <td>EvenSem</td>
      <td>40</td>
      <td>30</td>
      <td>86%</td>
    </tr>
    <tr>
      <td>4.</td>
      <td>21CS200126AA</td>
      <td>Computer Networks and Security</td>
      <td>03</td>
      <td>2022-2023</td>
      <td>EvenSem</td>
      <td>40</td>
      <td>38</td>
      <td>96%</td>
    </tr>
    <tr>
      <td>5.</td>
      <td>21CS200126RA</td>
      <td>ATFL</td>
      <td>05</td>
      <td>2022-2023</td>
      <td>EvenSem</td>
      <td>50</td>
      <td>42</td>
      <td>90%</td>
    </tr>
    <tr>
      <td>6.</td>
      <td>21CS200128RA</td>
      <td>Mathematical Programming</td>
      <td>1</td>
      <td>2022-2023</td>
      <td>EvenSem</td>
      <td>35</td>
      <td>29</td>
      <td>85%</td>
    </tr>
    <tr>
      <td>7.</td>
      <td>21CSE2000CRT</td>
      <td>CRT</td>
      <td>01</td>
      <td>2022-2023</td>
      <td>EvenSem</td>
      <td>80</td>
      <td>78</td>
      <td>95%</td>
    </tr>
</tbody>
</table>
            </div>
            </>
        );
    }
}
