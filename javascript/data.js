//Data
var testData = [{"playerId":1,"name":"Tom Rockliff","points":127.0,"team":"BL","position":"C"},
{"playerId":2,"name":"Scott Pendlebury","points":111.4,"team":"CW","position":"C"},
{"playerId":3,"name":"Gary Ablett","points":120.4,"team":"GC","position":"C"},
{"playerId":4,"name":"Michael Barlow","points":110.6,"team":"FR","position":"C"},
{"playerId":5,"name":"Joel Selwood","points":109.3,"team":"GE","position":"C"},
{"playerId":6,"name":"Dyson Heppell","points":109.2,"team":"ES","position":"C"},
{"playerId":7,"name":"Dayne Beams","points":108.8,"team":"BL","position":"C"},
{"playerId":8,"name":"Steve Johnson","points":108.7,"team":"GE","position":"C"},
{"playerId":9,"name":"Steele Sidebottom","points":107.0,"team":"CW","position":"C"},
{"playerId":10,"name":"Jordan Lewis","points":106.0,"team":"HW","position":"C"},
{"playerId":11,"name":"Matt Priddis","points":105.6,"team":"WC","position":"C"},
{"playerId":12,"name":"Dane Swan ","points":105.6,"team":"CW","position":"C,F"},
{"playerId":13,"name":"Jack Redden","points":105.1,"team":"BL","position":"C"},
{"playerId":14,"name":"Josh Kennedy","points":105.0,"team":"SY","position":"C"},
{"playerId":15,"name":"Nat Fyfe","points":104.7,"team":"FR","position":"C"},
{"playerId":16,"name":"Rory Sloane","points":104.5,"team":"AD","position":"C"},
{"playerId":17,"name":"Luke Parker","points":103.8,"team":"SY","position":"C"},
{"playerId":18,"name":"Adam Treloar","points":103.7,"team":"WS","position":"C"},
{"playerId":19,"name":"Toby Greene","points":103.2,"team":"WS","position":"C"},
{"playerId":20,"name":"Dion Prestia","points":102.7,"team":"GC","position":"C"},
{"playerId":21,"name":"Trent Cotchin","points":102.3,"team":"RI","position":"C"},
{"playerId":22,"name":"Patrick Dangerfield","points":102.3,"team":"AD","position":"C"},
{"playerId":23,"name":"Jobe Watson","points":101.7,"team":"ES","position":"C"},
{"playerId":24,"name":"Bryce Gibbs","points":101.7,"team":"CA","position":"C"},
{"playerId":25,"name":"Brad Ebert","points":100.0,"team":"PA","position":"C"},
{"playerId":26,"name":"Kieren Jack","points":100.0,"team":"SY","position":"C"},
{"playerId":27,"name":"Brandon Ellis","points":99.7,"team":"RI","position":"C"},
{"playerId":28,"name":"Brent Stanton","points":99.2,"team":"ES","position":"C"},
{"playerId":29,"name":"Jack Macrae","points":98.6,"team":"WB","position":"C"},
{"playerId":30,"name":"Callan Ward","points":98.4,"team":"WS","position":"C"},
{"playerId":31,"name":"Tom Liberatore ","points":98.3,"team":"WB","position":"C"},
{"playerId":32,"name":"Dan Hannebery","points":97.9,"team":"SY","position":"C"},
{"playerId":33,"name":"Dustin Martin","points":97.8,"team":"RI","position":"C,F"},
{"playerId":34,"name":"Brad Crouch","points":97.8,"team":"AD","position":"C"},
{"playerId":35,"name":"Ryan Griffen","points":97.8,"team":"WS","position":"C"},
{"playerId":36,"name":"Marc Murphy","points":97.7,"team":"CA","position":"C"},
{"playerId":37,"name":"Nathan Jones","points":97.5,"team":"ME","position":"C"},
{"playerId":38,"name":"Travis Boak","points":97.5,"team":"PA","position":"C"},
{"playerId":39,"name":"Brendon Goddard","points":97.3,"team":"ES","position":"C,F"},
{"playerId":40,"name":"Brett Deledio","points":97.2,"team":"RI","position":"C,F"},
{"playerId":41,"name":"David Swallow","points":96.6,"team":"GC","position":"C"},
{"playerId":42,"name":"David Mundy","points":96.6,"team":"FR","position":"C"},
{"playerId":43,"name":"Jaeger O'Meara","points":96.4,"team":"GC","position":"C"},
{"playerId":44,"name":"Jarrad McVeigh","points":95.9,"team":"SY","position":"B,C"},
{"playerId":45,"name":"Mitch Duncan","points":95.9,"team":"GE","position":"C"},
{"playerId":46,"name":"Robbie Gray","points":95.5,"team":"PA","position":"C,F"},
{"playerId":47,"name":"Lance Franklin","points":95.4,"team":"SY","position":"F"},
{"playerId":48,"name":"Andrew Swallow","points":95.0,"team":"KA","position":"C"},
{"playerId":49,"name":"David Zaharakis","points":94.7,"team":"ES","position":"C"},
{"playerId":50,"name":"Ollie Wines","points":94.6,"team":"PA","position":"C"},
{"playerId":51,"name":"Liam Shiels","points":94.6,"team":"HW","position":"C"},
{"playerId":52,"name":"Isaac Smith","points":94.5,"team":"HW","position":"C"},
{"playerId":53,"name":"Luke Hodge","points":94.4,"team":"HW","position":"B,C"},
{"playerId":54,"name":"Luke Shuey","points":93.8,"team":"WC","position":"C"},
{"playerId":55,"name":"Leigh Montagna","points":93.7,"team":"SK","position":"C"},
{"playerId":56,"name":"Jimmy Bartel","points":93.5,"team":"GE","position":"F"},
{"playerId":57,"name":"Jack Steven","points":93.5,"team":"SK","position":"C"},
{"playerId":58,"name":"Matthew Boyd","points":93.4,"team":"WB","position":"C"},
{"playerId":59,"name":"Ben McGlynn","points":93.4,"team":"SY","position":"C"},
{"playerId":60,"name":"Andrew Gaff","points":93.2,"team":"WC","position":"C"},
{"playerId":61,"name":"Sam Jacobs","points":93.1,"team":"AD","position":"R"},
{"playerId":62,"name":"Levi Greenwood","points":92.9,"team":"CW","position":"C"},
{"playerId":63,"name":"Scott Selwood","points":92.9,"team":"WC","position":"C"},
{"playerId":64,"name":"Brent Harvey","points":92.6,"team":"KA","position":"C,F"},
{"playerId":65,"name":"Kade Simpson","points":92.6,"team":"CA","position":"B"},
{"playerId":66,"name":"Sam Mitchell","points":92.5,"team":"HW","position":"C"},
{"playerId":67,"name":"Dylan Shiel","points":92.4,"team":"WS","position":"C"},
{"playerId":68,"name":"Lachie Neale","points":91.8,"team":"FR","position":"C"},
{"playerId":69,"name":"Hamish Hartlett","points":90.9,"team":"PA","position":"C"},
{"playerId":70,"name":"Sam Gibson","points":90.9,"team":"KA","position":"C"},
{"playerId":71,"name":"Scott Thompson","points":90.7,"team":"AD","position":"C"},
{"playerId":72,"name":"Kane Cornes","points":90.6,"team":"PA","position":"C"},
{"playerId":73,"name":"Mathew Stokes","points":90.6,"team":"GE","position":"C"},
{"playerId":74,"name":"Shane Mumford","points":90.5,"team":"WS","position":"R"},
{"playerId":75,"name":"Dom Tyson","points":90.5,"team":"ME","position":"C"},
{"playerId":76,"name":"Stephen Coniglio","points":90.3,"team":"WS","position":"C"},
{"playerId":77,"name":"James Kelly","points":90.0,"team":"GE","position":"B"},
{"playerId":78,"name":"Ben Cunnington","points":89.7,"team":"KA","position":"C"},
{"playerId":79,"name":"Nick Riewoldt","points":89.7,"team":"SK","position":"F"},
{"playerId":80,"name":"Tom Mitchell","points":89.7,"team":"SY","position":"C,F"},
{"playerId":81,"name":"Bernie Vince","points":89.7,"team":"ME","position":"C"},
{"playerId":82,"name":"Todd Goldstein","points":89.4,"team":"KA","position":"R"},
{"playerId":83,"name":"Richard Douglas","points":89.3,"team":"AD","position":"C"},
{"playerId":84,"name":"Michael Hibberd","points":89.1,"team":"ES","position":"B"},
{"playerId":85,"name":"David Armitage","points":89.1,"team":"SK","position":"C"},
{"playerId":86,"name":"Devon Smith)","points":89.0,"team":"WS","position":"C,F"},
{"playerId":87,"name":"Anthony Miles","points":88.1,"team":"RI","position":"C"},
{"playerId":88,"name":"Jack Ziebell","points":88.0,"team":"KA","position":"C,F"},
{"playerId":89,"name":"Jarryd Roughead","points":87.7,"team":"HW","position":"F"},
{"playerId":90,"name":"Chris Masten","points":87.6,"team":"WC","position":"C"},
{"playerId":91,"name":"Stefan Martin","points":87.2,"team":"BL","position":"R"},
{"playerId":92,"name":"Mark LeCras","points":87.2,"team":"WC","position":"F"},
{"playerId":93,"name":"Justin Westhoff","points":87.1,"team":"PA","position":"B,F"},
{"playerId":94,"name":"Harley Bennell","points":86.7,"team":"GC","position":"C,F"},
{"playerId":95,"name":"Brodie Smith","points":86.6,"team":"AD","position":"B"},
{"playerId":96,"name":"Luke Dahlhaus","points":86.4,"team":"WB","position":"C,F"},
{"playerId":97,"name":"Steven Motlop","points":86.3,"team":"GE","position":"C,F"},
{"playerId":98,"name":"Dayne Zorko","points":86.0,"team":"BL","position":"C,F"},
{"playerId":99,"name":"Nick Malceski","points":85.4,"team":"GC","position":"B"},
{"playerId":100,"name":"Will Minson","points":85.0,"team":"WB","position":"R"},
{"playerId":101,"name":"Matthew Lobbe","points":85.0,"team":"PA","position":"R"},
{"playerId":102,"name":"Nick Dal Santo","points":84.6,"team":"KA","position":"C"},
{"playerId":103,"name":"Ivan Maric","points":84.3,"team":"RI","position":"R"},
{"playerId":104,"name":"Andrew Walker","points":84.2,"team":"CA","position":"B"},
{"playerId":105,"name":"Nic Naitanui","points":84.1,"team":"WC","position":"R"},
{"playerId":106,"name":"Dale Thomas","points":83.9,"team":"CA","position":"C,F"},
{"playerId":107,"name":"Chad Wingard","points":83.8,"team":"PA","position":"F"},
{"playerId":108,"name":"Taylor Adams ","points":83.7,"team":"CW","position":"C,F"},
{"playerId":109,"name":"Jack Newnes","points":83.5,"team":"SK","position":"B,C"},
{"playerId":110,"name":"Farren Ray","points":83.3,"team":"SK","position":"C"},
{"playerId":111,"name":"Lachie Whitfield","points":83.1,"team":"WS","position":"C"},
{"playerId":112,"name":"Andrew Mackie","points":83.1,"team":"GE","position":"B"},
{"playerId":113,"name":"Matt Rosa","points":83.0,"team":"WC","position":"C"},
{"playerId":114,"name":"Grant Birchall","points":82.9,"team":"HW","position":"B"},
{"playerId":115,"name":"Aaron Sandilands","points":82.9,"team":"FR","position":"R"},
{"playerId":116,"name":"Paul Chapman","points":82.8,"team":"ES","position":"F"},
{"playerId":117,"name":"Jack Gunston","points":82.7,"team":"HW","position":"F"},
{"playerId":118,"name":"Patrick Ryder","points":82.6,"team":"PA","position":"R,F"},
{"playerId":119,"name":"Jamie Elliott","points":82.6,"team":"CW","position":"F"},
{"playerId":120,"name":"Beau Waters ","points":82.5,"team":"WC","position":"B"},
{"playerId":121,"name":"Matthew Leuenberger","points":82.4,"team":"BL","position":"R"},
{"playerId":122,"name":"Heath Shaw)","points":82.3,"team":"WS","position":"B"},
{"playerId":123,"name":"Josh Caddy","points":82.1,"team":"GE","position":"C"},
{"playerId":124,"name":"Travis Cloke","points":82.0,"team":"CW","position":"F"},
{"playerId":125,"name":"Bachar Houli","points":81.9,"team":"RI","position":"B"},
{"playerId":126,"name":"Chris Judd","points":81.9,"team":"CA","position":"C"},
{"playerId":127,"name":"Matthew Suckling","points":81.9,"team":"HW","position":"B"},
{"playerId":128,"name":"Ed Curnow","points":81.8,"team":"CA","position":"C"},
{"playerId":129,"name":"Sam Docherty","points":81.6,"team":"CA","position":"B"},
{"playerId":130,"name":"Allen Christensen","points":81.4,"team":"BL","position":"C,F"},
{"playerId":131,"name":"Shaun Burgoyne","points":81.4,"team":"HW","position":"B,C"},
{"playerId":132,"name":"Paul Duffield","points":81.2,"team":"FR","position":"B"},
{"playerId":133,"name":"Daniel Cross","points":81.2,"team":"ME","position":"C"},
{"playerId":134,"name":"Garrick Ibbotson","points":81.1,"team":"FR","position":"B"},
{"playerId":135,"name":"Taylor Walker","points":80.9,"team":"AD","position":"F"},
{"playerId":136,"name":"Cyril Rioli","points":80.6,"team":"HW","position":"F"},
{"playerId":137,"name":"Matthew Kreuzer","points":80.6,"team":"CA","position":"R"},
{"playerId":138,"name":"Daniel Wells","points":80.5,"team":"KA","position":"C"},
{"playerId":139,"name":"Josh Kennedy","points":80.5,"team":"WC","position":"F"},
{"playerId":140,"name":"Corey Enright","points":80.2,"team":"GE","position":"B"},
{"playerId":141,"name":"Mark Baguley","points":80.1,"team":"ES","position":"B"},
{"playerId":142,"name":"Ryan Bastinac","points":80.1,"team":"KA","position":"C"},
{"playerId":143,"name":"Matthew Wright","points":80.0,"team":"AD","position":"C,F"},
{"playerId":144,"name":"Ricky Petterd","points":80.0,"team":"RI","position":"C,F"},
{"playerId":145,"name":"Stephen Hill","points":79.9,"team":"FR","position":"C"},
{"playerId":146,"name":"Craig Bird","points":79.9,"team":"SY","position":"C,F"},
{"playerId":147,"name":"Michael Walters","points":79.7,"team":"FR","position":"F"},
{"playerId":148,"name":"Reece Conca","points":79.6,"team":"RI","position":"C"},
{"playerId":149,"name":"Jack Darling","points":79.6,"team":"WC","position":"F"},
{"playerId":150,"name":"Danyle Pearce","points":79.4,"team":"FR","position":"C,F"},
{"playerId":151,"name":"Andrew Carrazzo","points":79.3,"team":"CA","position":"C"},
{"playerId":152,"name":"David Myers","points":79.3,"team":"ES","position":"C"},
{"playerId":153,"name":"Jack Viney","points":79.0,"team":"ME","position":"C"},
{"playerId":154,"name":"Shannon Hurn","points":78.7,"team":"WC","position":"B"},
{"playerId":155,"name":"Adam Cooney","points":78.7,"team":"ES","position":"C,F"},
{"playerId":156,"name":"Tom Scully","points":78.4,"team":"WS","position":"C"},
{"playerId":157,"name":"Mark Hutchings","points":78.3,"team":"WC","position":"C"},
{"playerId":158,"name":"Tom Hawkins","points":78.2,"team":"GE","position":"F"},
{"playerId":159,"name":"Tendai Mzungu","points":78.2,"team":"FR","position":"B,C"},
{"playerId":160,"name":"Luke Dunstan","points":78.2,"team":"SK","position":"C"},
{"playerId":161,"name":"Hamish McIntosh","points":78.1,"team":"GE","position":"R"},
{"playerId":162,"name":"Michael Johnson","points":77.9,"team":"FR","position":"B"},
{"playerId":163,"name":"Joshua Kelly)","points":77.9,"team":"WS","position":"C,F"},
{"playerId":164,"name":"Shaun Grigg","points":77.8,"team":"RI","position":"C"},
{"playerId":165,"name":"Matthew Jaensch","points":77.7,"team":"AD","position":"B"},
{"playerId":166,"name":"Jarrod Harbrow","points":77.6,"team":"GC","position":"B,C"},
{"playerId":167,"name":"James Aish","points":77.6,"team":"BL","position":"C"},
{"playerId":168,"name":"Tom Bellchambers","points":77.4,"team":"ES","position":"R,F"},
{"playerId":169,"name":"Jarrad Waite","points":77.4,"team":"KA","position":"F"},
{"playerId":170,"name":"Ben McEvoy","points":77.3,"team":"HW","position":"R"},
{"playerId":171,"name":"Mitch Robinson","points":77.3,"team":"BL","position":"C,F"},
{"playerId":172,"name":"Chris Mayne","points":77.2,"team":"FR","position":"F"},
{"playerId":173,"name":"Marcus Bontempelli","points":77.1,"team":"WB","position":"C,F"},
{"playerId":174,"name":"Trent McKenzie","points":77.0,"team":"GC","position":"B"},
{"playerId":175,"name":"Jack Riewoldt","points":77.0,"team":"RI","position":"F"},
{"playerId":176,"name":"Ryan Lester","points":76.6,"team":"BL","position":"C"},
{"playerId":177,"name":"Thomas Lynch","points":76.6,"team":"GC","position":"F"},
{"playerId":178,"name":"Sam Fisher","points":76.6,"team":"SK","position":"B"},
{"playerId":179,"name":"Zac Clarke","points":76.4,"team":"FR","position":"R,F"},
{"playerId":180,"name":"Sam Mayes","points":76.3,"team":"BL","position":"B,C"},
{"playerId":181,"name":"Kade Kolodjashnij","points":76.3,"team":"GC","position":"B"},
{"playerId":182,"name":"Tom Langdon","points":76.3,"team":"CW","position":"B"},
{"playerId":183,"name":"Isaac Heeney","points":76.1,"team":"SY","position":"C"},
{"playerId":184,"name":"Josh Thomas ","points":76.1,"team":"CW","position":"C,F"},
{"playerId":185,"name":"Mark Whiley","points":76.0,"team":"CA","position":"C"},
{"playerId":186,"name":"Scott Lycett","points":76.0,"team":"WC","position":"R,F"},
{"playerId":187,"name":"Lewis Jetta","points":76.0,"team":"SY","position":"C,F"},
{"playerId":188,"name":"Josh Gibson","points":75.9,"team":"HW","position":"B"},
{"playerId":189,"name":"Jack Crisp ","points":75.8,"team":"CW","position":"C,F"},
{"playerId":190,"name":"Nathan van Berlo","points":75.8,"team":"AD","position":"C"},
{"playerId":191,"name":"Will Langford","points":75.6,"team":"HW","position":"C"},
{"playerId":192,"name":"Bradley Hill","points":75.5,"team":"HW","position":"C"},
{"playerId":193,"name":"Will Hoskin-Elliott","points":75.3,"team":"WS","position":"F"},
{"playerId":194,"name":"Adam Tomlinson,F)","points":75.3,"team":"WS","position":"B,F"},
{"playerId":195,"name":"Jay Schulz","points":75.2,"team":"PA","position":"F"},
{"playerId":196,"name":"Jack Martin","points":75.0,"team":"GC","position":"F"},
{"playerId":197,"name":"Jed Adcock","points":75.0,"team":"BL","position":"B"},
{"playerId":198,"name":"Shaun Higgins","points":75.0,"team":"KA","position":"B,F"},
{"playerId":199,"name":"Luke Breust","points":74.8,"team":"HW","position":"F"},
{"playerId":200,"name":"Jared Polec","points":74.8,"team":"PA","position":"C"},
{"playerId":201,"name":"Jonathon Griffin","points":74.5,"team":"FR","position":"R"},
{"playerId":202,"name":"Jake Carlisle","points":74.4,"team":"ES","position":"B,F"},
{"playerId":203,"name":"Jack Grimes","points":74.4,"team":"ME","position":"B"},
{"playerId":204,"name":"Tom Hickey","points":74.4,"team":"SK","position":"R"},
{"playerId":205,"name":"Ryan Harwood ","points":74.3,"team":"BL","position":"B"},
{"playerId":206,"name":"Marley Williams","points":74.3,"team":"CW","position":"B"},
{"playerId":207,"name":"Cameron Guthrie","points":74.2,"team":"GE","position":"C"},
{"playerId":208,"name":"Courtenay Dempsey","points":74.2,"team":"ES","position":"B"},
{"playerId":209,"name":"Harry Taylor","points":74.0,"team":"GE","position":"B"},
{"playerId":210,"name":"Angus Monfries","points":74.0,"team":"PA","position":"F"},
{"playerId":211,"name":"Shane Savage","points":74.0,"team":"SK","position":"B"},
{"playerId":212,"name":"Jeremy Howe","points":73.9,"team":"ME","position":"B"},
{"playerId":213,"name":"Heritier Lumumba","points":73.9,"team":"ME","position":"B,C"},
{"playerId":214,"name":"Ricky Henderson","points":73.8,"team":"AD","position":"B"},
{"playerId":215,"name":"Matt Jones","points":73.6,"team":"ME","position":"C"},
{"playerId":216,"name":"Cale Hooker","points":73.2,"team":"ES","position":"B"},
{"playerId":217,"name":"Robert Murphy","points":73.1,"team":"WB","position":"B"},
{"playerId":218,"name":"Matthew Broadbent","points":73.1,"team":"PA","position":"B"},
{"playerId":219,"name":"Matt de Boer","points":73.0,"team":"FR","position":"F"},
{"playerId":220,"name":"Matt White","points":73.0,"team":"PA","position":"C,F"},
{"playerId":221,"name":"Nathan Hrovat","points":72.8,"team":"WB","position":"C"},
{"playerId":222,"name":"Angus Brayshaw","points":72.7,"team":"ME","position":"F"},
{"playerId":223,"name":"Matthew Pavlich","points":72.7,"team":"FR","position":"F"},
{"playerId":224,"name":"Travis Colyer","points":72.7,"team":"ES","position":"C,F"},
{"playerId":225,"name":"Michael Hurley","points":72.6,"team":"ES","position":"B"},
{"playerId":226,"name":"Nick Vlastuin","points":72.6,"team":"RI","position":"B,C"},
{"playerId":227,"name":"Adam Schneider","points":72.6,"team":"SK","position":"F"},
{"playerId":228,"name":"Jonathan Simpkin","points":72.6,"team":"HW","position":"C,F"},
{"playerId":229,"name":"Jarryd Blair","points":72.5,"team":"CW","position":"F"},
{"playerId":230,"name":"Paul Seedsman","points":72.5,"team":"CW","position":"B"},
{"playerId":231,"name":"Ben Howlett","points":72.5,"team":"ES","position":"C,F"},
{"playerId":232,"name":"Alex Rance","points":72.2,"team":"RI","position":"B"},
{"playerId":233,"name":"Cam O'Shea","points":72.1,"team":"PA","position":"B"},
{"playerId":234,"name":"Mitch Wallis","points":72.1,"team":"WB","position":"C"},
{"playerId":235,"name":"Jack Watts","points":72.1,"team":"ME","position":"F"},
{"playerId":236,"name":"Cameron Wood","points":72.0,"team":"CA","position":"R"},
{"playerId":237,"name":"Matt Taberner","points":71.9,"team":"FR","position":"F"},
{"playerId":238,"name":"Jason Winderlich","points":71.9,"team":"ES","position":"B,F"},
{"playerId":239,"name":"Paul Puopolo","points":71.9,"team":"HW","position":"F"},
{"playerId":240,"name":"Luke McDonald","points":71.8,"team":"KA","position":"B"},
{"playerId":241,"name":"Clinton Young","points":71.8,"team":"CW","position":"B,C"},
{"playerId":242,"name":"Jonathan Giles","points":71.8,"team":"ES","position":"R"},
{"playerId":243,"name":"Rhys Palmer","points":71.7,"team":"WS","position":"F"},
{"playerId":244,"name":"Hayden Ballantyne","points":71.7,"team":"FR","position":"F"},
{"playerId":245,"name":"Jonathon Ceglar","points":71.6,"team":"HW","position":"R,F"},
{"playerId":246,"name":"David Mackay","points":71.6,"team":"AD","position":"C"},
{"playerId":247,"name":"Mark Blicavs","points":71.5,"team":"GE","position":"C,R"},
{"playerId":248,"name":"Chris Yarran","points":71.5,"team":"CA","position":"B"},
{"playerId":249,"name":"Lewis Taylor","points":71.2,"team":"BL","position":"F"},
{"playerId":250,"name":"Brodie Grundy","points":71.1,"team":"CW","position":"R"},
{"playerId":251,"name":"Kayne Turner","points":71.0,"team":"KA","position":"F"},
{"playerId":252,"name":"Liam Picken","points":71.0,"team":"WB","position":"B"},
{"playerId":253,"name":"Kane Mitchell","points":70.9,"team":"PA","position":"C,F"},
{"playerId":254,"name":"Brendan Whitecross","points":70.8,"team":"HW","position":"B"},
{"playerId":255,"name":"Matt Crouch","points":70.8,"team":"AD","position":"C"},
{"playerId":256,"name":"Sharrod Wellingham","points":70.8,"team":"WC","position":"C,F"},
{"playerId":257,"name":"Drew Petrie","points":70.7,"team":"KA","position":"F"},
{"playerId":258,"name":"Tom Lynch","points":70.6,"team":"AD","position":"F"},
{"playerId":259,"name":"Mitch Hallahan","points":70.5,"team":"GC","position":"C"},
{"playerId":260,"name":"Jackson Merrett","points":70.5,"team":"ES","position":"C,F"},
{"playerId":261,"name":"Mitch Golby","points":70.4,"team":"BL","position":"B"},
{"playerId":262,"name":"Jeremy Cameron","points":70.3,"team":"WS","position":"F"},
{"playerId":263,"name":"Zach Merrett","points":70.0,"team":"ES","position":"F"},
{"playerId":264,"name":"Anthony Morabito","points":70.0,"team":"FR","position":"C"},
{"playerId":265,"name":"Luke McPharlin","points":69.9,"team":"SK","position":"B"},
{"playerId":266,"name":"Sean Dempster","points":69.8,"team":"SK","position":"B"},
{"playerId":267,"name":"Curtly Hampton)","points":69.8,"team":"WS","position":"B"},
{"playerId":268,"name":"Shaun Atley","points":69.6,"team":"KA","position":"B"},
{"playerId":269,"name":"Shane Biggs","points":69.6,"team":"WB","position":"B,C"},
{"playerId":270,"name":"Rhyce Shaw","points":69.6,"team":"SY","position":"B"},
{"playerId":271,"name":"Danny Stanley","points":69.6,"team":"GC","position":"C,F"},
{"playerId":272,"name":"Lee Spurr","points":69.5,"team":"FR","position":"B"},
{"playerId":273,"name":"Viv Michie","points":69.4,"team":"ME","position":"C"},
{"playerId":274,"name":"Jarrod Witts","points":69.3,"team":"CW","position":"R"},
{"playerId":275,"name":"Zac Smith","points":69.3,"team":"GC","position":"R"},
{"playerId":276,"name":"Sam Kerridge","points":69.2,"team":"AD","position":"C,F"},
{"playerId":277,"name":"Shane Edwards","points":69.0,"team":"RI","position":"C,F"},
{"playerId":278,"name":"Kurt Tippett","points":69.0,"team":"SY","position":"F"},
{"playerId":279,"name":"Cameron Sutcliffe","points":69.0,"team":"FR","position":"B"},
{"playerId":280,"name":"Mark Jamar","points":68.9,"team":"ME","position":"R"},
{"playerId":281,"name":"Andrejs Everitt","points":68.9,"team":"CA","position":"B,C"},
{"playerId":282,"name":"Maverick Weller","points":68.8,"team":"SK","position":"C"},
{"playerId":283,"name":"Nathan Foley","points":68.8,"team":"RI","position":"C,F"},
{"playerId":284,"name":"Scott Thompson","points":68.7,"team":"KA","position":"B"},
{"playerId":285,"name":"Greg Broughton","points":68.6,"team":"GC","position":"B"},
{"playerId":286,"name":"Mike Pyke","points":68.6,"team":"SY","position":"R"},
{"playerId":287,"name":"Rory Laird","points":68.4,"team":"AD","position":"B"},
{"playerId":288,"name":"James Frawley","points":68.3,"team":"HW","position":"B,F"},
{"playerId":289,"name":"George Horlin-Smith","points":68.2,"team":"GE","position":"C,F"},
{"playerId":290,"name":"Lachlan Hansen","points":68.2,"team":"KA","position":"B"},
{"playerId":291,"name":"Lynden Dunn","points":68.2,"team":"ME","position":"B"},
{"playerId":292,"name":"Ben Reid","points":68.2,"team":"CW","position":"F"},
{"playerId":293,"name":"Jack Billings","points":68.1,"team":"SK","position":"F"},
{"playerId":294,"name":"Jake Melksham","points":68.1,"team":"ES","position":"C,F"},
{"playerId":295,"name":"Liam Duggan","points":68.1,"team":"WC","position":"C"},
{"playerId":296,"name":"Billy Longer","points":68.0,"team":"SK","position":"R"},
{"playerId":297,"name":"Jarryn Geary","points":68.0,"team":"SK","position":"B"},
{"playerId":298,"name":"Tom Nicholls","points":68.0,"team":"GC","position":"R"},
{"playerId":299,"name":"Sam Dwyer","points":67.9,"team":"CW","position":"C,F"},
{"playerId":300,"name":"Rohan Bail","points":67.9,"team":"ME","position":"C,F"}];


//current session data
function Data(data) {
  this.originalList = data;
  this.currentList = data;
  this.previousList = data;
  this.myTeam = [];

  this.whoToShow = this.currentList.map(function(obj){return obj}); //this is a referenece i need a copy
}

Data.prototype = {
  updateData : function(dataArray){

  },

  matchData : function(dataToMatch, originalData) {
    var arr = [];

    for (var i = 0; i < originalData.length; i++){
      for (var j = 0; j < dataToMatch.length; j++){
        if(dataToMatch[j] == originalData[i].playerId){
          arr.push(dataToMatch[j]); //add player obj
          originalData.splice(i, 1);
          i = -1;
          break;
        }
      }
    }

    return arr;
  },

  quickFind: function(item, index){

    this.previousList = this.currentList.map(function(obj){return obj}); //need to return new array

    for(var i = 0; i < this.currentList.length; i++){
      if(item.getAttribute("data-playerid") == this.currentList[i].playerId){
        this.currentList.splice(i, 1);
      }
    }

    this.currentList.splice(index , 0, this.reconstructObj(item));

    return this.currentList;
  },

  removeObj: function(item){

    for(var i = 0; i < this.whoToShow.length; i++){
      if(item.getAttribute("data-playerid") == this.whoToShow[i].playerId){
        this.whoToShow.splice(i, 1);
      }
    }
  },

  reconstructObj : function(item){
    var obj = {};

//TO DO make interative
    itemData = item.getElementsByTagName('td');

    obj.playerId = item.getAttribute("data-playerid");
    obj.name = itemData[0].innerText;
    obj.points = itemData[1].innerText;
    obj.team = itemData[2].innerText;
    obj.position = itemData[3].innerText;

    return obj;
  },

  addToMyTeam : function(obj){
    this.myTeam.push(obj);

    return this.myTeam;
  },

  removeFromMyTeam : function(item){
    var index = undefined;

    for(var i = 0; i < this.myTeam.length; i++){
      if(item.getAttribute("data-playerid") == this.myTeam[i].playerId){
        this.myTeam.splice(i, 1);
        index = i;
      }
    }

    return index;
  },


  positionCounter: function(){

    var count = {};
    count.f = 0;
    count.c = 0;
    count.b = 0;
    count.r = 0;
    count.cf = 0;
    count.bf = 0;
    count.rf = 0;
    count.cr = 0;
    count.bc = 0;



    for(var i = 0; i < this.myTeam.length; i++){
      if(this.myTeam[i].position === 'F'){
        count.f++;
      } else if(this.myTeam[i].position === 'B'){
        count.b++;
      }else if(this.myTeam[i].position === 'C'){
        count.c++;
      }else if(this.myTeam[i].position === 'R'){
        count.r++;
      }else if(this.myTeam[i].position === 'B,F'){
        count.bf++;
      }else if(this.myTeam[i].position === 'C,F'){
        count.cf++;
      }else if(this.myTeam[i].position === 'R,F'){
        count.rf++;
      }else if(this.myTeam[i].position === 'C,R'){
        count.cr++;
      }else if(this.myTeam[i].position === 'B,C'){
        count.bc++;
      }
    }

    return count;

  },

  restorePlayer: function(attr, t){


    //loop trough global table find elements that are not disbale
    //make a list and set that to who to show

    var tableContent = t.table.tbody.children;
    var arr = [];

    //loop throught the table rows, find data- attribute, get value, return arr of values
    for (var i = 0; i < tableContent.length; i++){

      for (var j = 0; j < tableContent[i].attributes.length; j++){
        if(tableContent[i].attributes[j].name === ('data-'+attr)){

          arr.push(this.reconstructObj(tableContent[i]))
        }
      }
    }

    //arr is exclude list


    var tmpArr = this.currentList.map(function(obj){return obj}); //this is a referenece i need a copy


    for(var i = 0; i < arr.length; i++){


      for(var j = 0; j < tmpArr.length; j++ ){
        if(tmpArr[j].playerId == arr[i].playerId){
          tmpArr.splice(j, 1);
        }
      }
    }



    this.whoToShow = tmpArr;

  },

  findIndex: function(item){

    for(var i = 0; i < this.currentList.length; i++){
      if(item.getAttribute("data-playerid") == this.currentList[i].playerId){
        return i;
      }
    }

  },
}

function filterData(data, filter){

  var arr = [];

  for (var i = 0; i < data.length; i++){
    if(data[i]['position'] === filter){
      arr.push(data[i]);
    }
  }

  return arr;
}

function exculdePlayer(el, excludeList){


  for(var i = 0; i < this.currentList.length; i++){
    if(el.playerId === this.currentList[i].playerId){
      this.currentList.splice(i, 1);
    }
  }
}
