import * as React from 'react'
// import {Link} from 'components/lib'
// import {ListItemList} from 'components/list-item-list'

// function FinishedScreen() {
//   return (
//     <ListItemList
//       filterListItems={li => Boolean(li.finishDate)}
//       noListItems={
//         <p>
//           Hey there! This is where books will go when you've finished reading
//           them. Get started by heading over to{' '}
//           <Link to="/discover">the Discover page</Link> to add books to your
//           list.
//         </p>
//       }
//       noFilteredListItems={
//         <p>
//           Looks like you've got some reading to do! Check them out in your{' '}
//           <Link to="/list">reading list</Link> or{' '}
//           <Link to="/discover">discover more</Link>.
//         </p>
//       }
//     />
//   )
// }

// export {FinishedScreen}

export function FinishedScreen() {
  return (
    <>
      <div>
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          {/* Main area */}
        </div>
        <aside className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {/* Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  )
}
