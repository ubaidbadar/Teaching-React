import AlertModal from "./ui/AlertModal/AlertModal";

  function App() {
    return (
      <div style={{ height: '200vh' }}>

        {/* {xyz()} */}

        <AlertModal
          title='Are you sure?'
          component={onOpen => <button className="btn-primary bg-danger" onClick={onOpen}>Delete Item</button>}
          description='You really want to delete this Product?'
          Footer={props => (
            <>
              <button className="tx-primary">Yes</button>
              <button className="tx-danger" onClick={props.onClose}>No</button>
            </>
          )}
          footer={onClose => (
            <>
              <button>Yes</button>
              <button onClick={onClose}>No</button>
            </>
          )}
        />

      </div>
    )
  }

export default App;
