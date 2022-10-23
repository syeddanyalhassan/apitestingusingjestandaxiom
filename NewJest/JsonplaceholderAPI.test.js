const newfunctions=require('./JsonplaceholderAPI');

test('fetched data should be Leanne Graham',()=>{
    expect.assertions(1);
    return newfunctions.fetchuser()
          .then(data=>{
            expect(data.name).toEqual('Leanne Graham');
          });

});

test('fetched data should be Ervin Howell',async()=>{
  expect.assertions(1);
  const data=await newfunctions.fetchseconduser();
  expect(data.name).toEqual('Ervin Howell');

});

test('fetched datausername would be Antonette',async()=>{
  expect.assertions(1);
  const datauser=await newfunctions.fetchseconduser();
  expect(datauser.username).toEqual('Antonette');
});

test('fetched email would be Shanna@melissa.tv',async()=>{
  expect.assertions(1);
  const dataemail=await newfunctions.fetchseconduser();
  expect(dataemail.email).toEqual('Shanna@melissa.tv');
});

test('fetched address street would be Victor Plains',()=>{
  expect.assertions(1);
  return newfunctions.fetchseconduser()
        .then(data=>{
          expect(data.address.street).toEqual('Victor Plains');
 
        });

});

test('fetched geo location latitude would be -43.9509',()=>{
  expect.assertions(1);
  return newfunctions.fetchseconduser()
        .then(data=>{
          expect(data.address.geo.lat).toEqual('-43.9509');

        });

});