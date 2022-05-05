import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';


describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Fernando'
    }

    test('debe de mostrar el componente sin el usuario', () => {
        
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toBe( 'null' );
        // screen.debug()
    });


    test('debe de mostrar el componente CON el usuario', () => {
        
        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
        // screen.debug()
    });
    
});
