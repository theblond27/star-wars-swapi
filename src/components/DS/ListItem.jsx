import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';

const ListItem = ({ item, children, footer }) => {
  return (
    <Card key={item.name} className=''>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
          {...children}
      </CardContent>
      <CardFooter>
        <div>
          {footer
            ? <div>{footer}</div>
            : <></>
          }
        </div>
      </CardFooter>
    </Card>
  )
}

export default ListItem;